import caver from "@/config/caver";
import INFT from "@/schema/INFT";
import { AbiItem, Contract } from "caver-js";
import ABI from "@/abi/MetaHuman.json";
import axios from "axios";
import { MetaHuman } from "types/web3-v1-contracts";

const contractAddress = "0xa4e0931470700187317B551B1c06733Df6645758";

async function fetchNFT(contract: MetaHuman, id: number): Promise<INFT> {
  const hash = await contract.methods.tokenURI(id).call();
  const owner = await contract.methods.ownerOf(id).call();

  const response = await axios.get(hash);
  if (response.status === 200) {
    const metadata = await response.data;
    const imageCID = (metadata.image as string).split("//")[1];
    return {
      id: id,
      name: metadata.name,
      color: "todo",
      image: `https://ipfs.io/ipfs/${imageCID}`,
      attributes: [],
    };
  } else {
    throw new Error("Something went wrong");
  }
}

export async function fetchCollection(): Promise<INFT[]> {
  const contract = caver.contract.create(
    ABI as AbiItem[],
    contractAddress
  ) as any as MetaHuman;
  const totalSupply = await contract.methods.totalSupply().call();

  const collection = await Promise.all(
    Array(totalSupply)
      .fill("0")
      .map((e, i) => fetchNFT(contract, i + 1)) // [fetchNFT(1), fetchNFT(2) ... fetchNFT(9999), fetchNFT(10000)]
  );

  return collection;
}

const backgroundColor = [
  "#8BCDE8",
  "#EB6FCC",
  "#637C6D",
  "#BFB344",
  "#57D181",
  "#FF6942",
  "#FF964A",
  "#1E4CC1",
  "#3E237D",
];

const background = [
  "Sky Blue",
  "Pink",
  "Olive Green",
  "Mustard",
  "Light Green",
  "Dark Orange",
  "Orange",
  "Blue",
  "Purple",
];

const cloth = ["Hood", "T-shirt", "One-piece"];

export function fetchDummyNFTs(): INFT[] {
  let collection: INFT[] = [];
  for (let i = 1; i <= 10000; i++) {
    try {
      collection = [
        ...collection,
        {
          id: i,
          name: `#XX${String(i).padStart(5, "0")}`,
          image: `https://ipfs.io/ipfs/Qme42XjH7tBpvqyCqQFoa6UmbXehnRbwk5NDVATCSVQvf3`,
          color: backgroundColor[(i - 1) % backgroundColor.length],
          attributes: [
            {
              trait_type: "Background",
              value: background[(i - 1) % background.length],
            },
            {
              trait_type: "Clothes",
              value: cloth[(i - 1) % cloth.length],
            },
          ],
        },
      ];
    } catch (e) {
      console.error("Something went wrong", e);
    }
  }

  return collection;
}
