import { Action, getModule, Module, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import axios from "axios";

@Module({ dynamic: true, store, name: "IPFS" })
class IPFSManager extends VuexModule {
  @Action({ rawError: true })
  async pinImageToIPFS(image: File): Promise<string> {
    const form = new FormData();

    form.append("file", image);

    const response = await axios.post(`https://api.pinata.cloud/pinning/pinFileToIPFS`, form, {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_PINATA_API_TOKEN}`,
      },
    });
    return response.data.IpfsHash;
  }

  @Action({ rawError: true })
  async pinNFTToIPFS(data: {
    name: string;
    description: string;
    imageHash: string;
  }): Promise<string> {
    const body = {
      pinataMetadata: {
        name: data.name,
      },
      pinataContent: {
        name: data.name,
        description: data.description,
        image: data.imageHash,
      },
    };
    const response = await axios.post(`https://api.pinata.cloud/pinning/pinJSONToIPFS`, body, {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_PINATA_API_TOKEN}`,
      },
    });
    return response.data.IpfsHash;
  }
}

export const IPFSModule = getModule(IPFSManager, store);
