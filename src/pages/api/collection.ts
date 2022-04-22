import caver from "@/config/caver";
import INFT from "@/schema/INFT";
import { AbiItem } from "caver-js";
import ABI from "@/abi/abi.json";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const collection = await fetchNFTs();
    res.status(200).json({ collection: collection });
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function fetchNFTs(): Promise<INFT[]> {
  const contract = new caver.klay.Contract(
    ABI as AbiItem[],
    "0xa4e0931470700187317B551B1c06733Df6645758"
  );
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
      collection = [
        ...collection,
        {
          id: i,
          name: metadata.name,
          image: image,
          owner: owner,
        },
      ];
    } catch (e) {
      console.error("Something went wrong", e);
    }
  }

  return [...collection];
}
