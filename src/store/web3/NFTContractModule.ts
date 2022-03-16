import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import { ethers, Contract } from "ethers";
import NFTCollection from "@/abis/NFTCollection.json";
import { IHoneyXBadger } from "@/schema/IHoneyXBadger";
import axios from "axios";
import { JsonRpcSigner } from "@ethersproject/providers";

declare let window: any;

interface IWeb3 {
  walletAddress: string;
  contract: Contract;
  signer: JsonRpcSigner;
  collectionName: string;
  totalSupply: bigint;
  collection: IHoneyXBadger[];
  isMintSaleActive: boolean;
  maxMintAmount: bigint;
}

@Module({ dynamic: true, store, name: "NFTContract" })
class NFTContractManager extends VuexModule implements IWeb3 {
  walletAddress = "";
  contract = {} as any;
  signer = {} as any;
  collectionName = "";
  totalSupply = BigInt(0);
  collection = [] as IHoneyXBadger[];
  isMintSaleActive = false;
  maxMintAmount = BigInt(0);

  @Mutation
  setWalletAddress(address: string) {
    this.walletAddress = address;
  }

  @Mutation
  setContract(contract: Contract) {
    this.contract = contract;
  }

  @Mutation
  setSigner(signer: JsonRpcSigner) {
    this.signer = signer;
  }

  @Mutation
  setCollectionName(nameOfNFT: string) {
    this.collectionName = nameOfNFT;
  }

  @Mutation
  setTotalSupply(totalSupply: bigint) {
    this.totalSupply = totalSupply;
  }

  @Mutation
  setCollection(collection: IHoneyXBadger[]) {
    this.collection = collection;
  }

  @Mutation
  setIsMintSaleActive(isMintSaleActive: boolean) {
    this.isMintSaleActive = isMintSaleActive;
  }

  @Mutation
  setMaxMintAmount(maxMintAmount: bigint) {
    this.maxMintAmount = maxMintAmount;
  }

  @Action({ rawError: true })
  async connectWallet() {
    if (!window.ethereum) {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);
    this.setWalletAddress(await provider.getSigner().getAddress());
    this.setSigner(provider.getSigner());

    const networkId = (await provider.getNetwork()).chainId;
    const networkData = (NFTCollection.networks as any)[networkId];

    const abi = NFTCollection.abi;
    const address = networkData.address as string;
    const contract = new ethers.Contract(address, abi, provider.getSigner());

    this.setContract(contract);
  }

  @Action({ rawError: true })
  async establishContract() {
    const provider = new ethers.providers.InfuraProvider(
      "rinkeby",
      "2b623591fbc84ad3a0f19ab893211159"
    );

    const networkId = (await provider.getNetwork()).chainId;
    const networkData = (NFTCollection.networks as any)[networkId];

    if (networkData) {
      const abi = NFTCollection.abi;
      const address = networkData.address as string;

      const contract = new ethers.Contract(address, abi, provider);
      this.setContract(contract);

      await this.fetchCollectionName();
      await this.fetchCollectionTotalSupply();
      await this.fetchMintSaleStatus();
      await this.fetchMaxMintAmount();
      await this.fetchNFTInCollection();
    } else {
      window.alert("Contract is not deployed to detected network.");
    }
  }

  @Action({ rawError: true })
  async fetchCollectionName() {
    const name = await this.contract.name();
    this.setCollectionName(name);
  }

  @Action({ rawError: true })
  async fetchCollectionTotalSupply() {
    const totalSupply = await this.contract.totalSupply();
    this.setTotalSupply(totalSupply);
  }

  @Action({ rawError: true })
  async fetchMintSaleStatus() {
    const isMintSaleActive = await this.contract.isMintSaleActive();
    this.setIsMintSaleActive(isMintSaleActive);
  }

  @Action({ rawError: true })
  async fetchMaxMintAmount() {
    const maxMintAmount = await this.contract.maxMintAmount();
    this.setMaxMintAmount(maxMintAmount);
  }

  @Action({ rawError: true })
  async fetchNFTInCollection() {
    let collection: IHoneyXBadger[] = [];

    for (let i = 1; i <= this.totalSupply; i++) {
      const hash = await this.contract.tokenURI(i);
      try {
        const response = await axios.get(hash);
        if (response.status != 200) {
          throw new Error("Something went wrong");
        }

        const metadata = await response.data;
        const image = (metadata.image as string).split("//")[1]; // ipfs://something -> something
        collection = [
          {
            name: metadata.name,
            image: image,
          },
          ...collection,
        ];
      } catch (e) {
        console.error("Something went wrong", e);
      }
    }
    this.setCollection(collection);
  }

  @Action({ rawError: true })
  async mint(data: { mintAmount: number }): Promise<void> {
    const response = await this.contract.mintHoneyBadger(data.mintAmount, {
      value: ethers.utils.parseEther("0.1"),
    });

    await response.wait();

    console.log(response.data);
  }
}

export const NFTContractModule = getModule(NFTContractManager, store);
