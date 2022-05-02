import caver from "@/config/caver";
import INFT from "@/schema/INFT";
import { AbiItem } from "caver-js";
import ABI from "@/abi/abi.json";
import axios from "axios";

const contractAddress = "0xa4e0931470700187317B551B1c06733Df6645758";

export async function fetchNFTs(): Promise<INFT[]> {
  const contract = new caver.klay.Contract(ABI as AbiItem[], contractAddress);
  const totalSupply = await contract.methods.totalSupply().call();
  let collection: INFT[] = [];
  for (let i = 1; i <= totalSupply; i++) {
    const hash = await contract.methods.tokenURI(i).call();
    const owner = await contract.methods.ownerOf(i).call();
    try {
      const response = await axios.get(hash);
      if (response.status != 200) {
        throw new Error("Something went wrong");
      }

      const metadata = await response.data;
      const image = (metadata.image as string).split("//")[1]; // ipfs://something -> something
      // collection = [
      //   ...collection,
      //   {
      //     id: i,
      //     name: metadata.name,
      //     image: `https://ipfs.io/ipfs/${image}`,
      //   },
      // ];
    } catch (e) {
      console.error("Something went wrong", e);
    }
  }

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
