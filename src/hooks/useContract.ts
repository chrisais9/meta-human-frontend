import { useEffect, useState } from "react";
import caver from "@/config/caver";
import ABI from "@/abi/abi.json";
import { AbiItem } from "caver-js";

declare global {
  interface Window {
    klaytn: any;
  }
}

function useContract() {
  const [name, setName] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const name = await fetchCollectionName();
      setName(name);

      const totalSupply = await fetchTotalSupply();
      setTotalSupply(totalSupply);
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

  return { name: name, totalSupply: totalSupply };
}

export default useContract;
