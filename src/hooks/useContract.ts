import { useEffect, useState } from "react";
import caver from "@/config/caver";
import ABI from "@/abi/abi.json";
import { AbiItem } from "caver-js";
import INFT from "@/schema/INFT";
import axios from "axios";

declare global {
  interface Window {
    klaytn: any;
  }
}

function useContract() {
  const [name, setName] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [collection, setCollection] = useState([] as INFT[]);

  useEffect(() => {
    const fetchData = async () => {
      const name = await fetchCollectionName();
      setName(name);

      const totalSupply = await fetchTotalSupply();
      setTotalSupply(totalSupply);

      const collection = await fetchNFTs(totalSupply);
      setCollection(collection);
    };
    fetchData();
  }, []);

  async function fetchCollectionName(): Promise<string> {
    const contract = new caver.klay.Contract(
      ABI as AbiItem[],
      "0xa4e0931470700187317B551B1c06733Df6645758"
    );
    const collectionName = await contract.methods.name().call();
    return collectionName;
  }

  async function fetchTotalSupply(): Promise<number> {
    const contract = new caver.klay.Contract(
      ABI as AbiItem[],
      "0xa4e0931470700187317B551B1c06733Df6645758"
    );
    const totalSupply = await contract.methods.totalSupply().call();

    return totalSupply;
  }

  async function fetchNFTs(totalSupply: number): Promise<INFT[]> {
    const contract = new caver.klay.Contract(
      ABI as AbiItem[],
      "0xa4e0931470700187317B551B1c06733Df6645758"
    );
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
          {
            id: i,
            name: metadata.name,
            image: image,
            owner: owner,
          },
          ...collection,
        ];
      } catch (e) {
        console.error("Something went wrong", e);
      }
    }
    return collection;
  }

  return { name: name, totalSupply: totalSupply, collection: collection };
}

export default useContract;
