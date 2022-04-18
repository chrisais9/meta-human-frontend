import { useEffect, useState } from "react";
import caver from "../config/caver";
import ABI from "../abi/abi.json";
import { AbiItem } from "caver-js";

const useContract = () => {
  const [name, setName] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    fetchCollectionName();
    fetchTotalSupply();
  });

  async function fetchCollectionName() {
    const contract = new caver.klay.Contract(
      ABI as AbiItem[],
      "0xa4e0931470700187317B551B1c06733Df6645758"
    );
    const collectionName = await contract.methods.name().call();

    setName(collectionName);
  }

  async function fetchTotalSupply() {
    const contract = new caver.klay.Contract(
      ABI as AbiItem[],
      "0xa4e0931470700187317B551B1c06733Df6645758"
    );
    const totalSupply = await contract.methods.totalSupply().call();

    setTotalSupply(totalSupply);
  }

  return { name: name, totalSupply: totalSupply };
};

export default useContract;
