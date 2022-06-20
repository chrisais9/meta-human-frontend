import { useEffect, useState } from "react";
import caver, { deployedAddress } from "@/config/caver";
import ABI from "@/abi/MetaHuman.json";
import { AbiItem } from "caver-js";
import { MetaHuman } from "types/web3-v1-contracts";

declare global {
  interface Window {
    klaytn: any;
  }
}

function useMetaHuman() {
  const contract = caver.contract.create(
    ABI as AbiItem[],
    deployedAddress
  ) as any as MetaHuman;
  const [name, setName] = useState("");
  const [maxSupply, setMaxSupply] = useState("0");
  const [totalSupply, setTotalSupply] = useState("0");
  const [tokenPrice, setTokenPrice] = useState("0");
  const [maxMintAmount, setMaxMintAmount] = useState("0");
  const [isWhitelistMintActive, setIsWhitelistMintActive] = useState(false);
  const [isPublicMintActive, setIsPublicMintActive] = useState(false);
  const [baseURI, setBaseURI] = useState("");

  useEffect(() => {
    contract.events.allEvents(
      { filter: { event: "Transfer" } },
      async (err: any, result: any) => {
        console.log(err, result);
        setTotalSupply(await fetchTotalSupply());
      }
    );

    const fetchData = async () => {
      const [
        name,
        maxSupply,
        totalSupply,
        tokenPrice,
        maxMintAmount,
        isWhitelistMintActive,
        isPublicMintActive,
        baseURI,
      ] = await Promise.all([
        fetchCollectionName(),
        fetchMaxSupply(),
        fetchTotalSupply(),
        fetchTokenPrice(),
        fetchMaxMintAmount(),
        fetchWhitelistMintStatus(),
        fetchPublicMintStatus(),
        fetchBaseURI(),
      ]);

      setName(name);
      setMaxSupply(maxSupply);
      setTotalSupply(totalSupply);
      setTokenPrice(tokenPrice);
      setMaxMintAmount(maxMintAmount);
      setIsWhitelistMintActive(isWhitelistMintActive);
      setIsPublicMintActive(isPublicMintActive);
      setBaseURI(baseURI);
    };
    fetchData();
  }, []);

  function fetchCollectionName(): Promise<string> {
    const collectionName = contract.methods.name().call();
    return collectionName;
  }

  function fetchMaxSupply(): Promise<string> {
    const maxSupply = contract.methods.maxSupply().call();
    return maxSupply;
  }

  function fetchTotalSupply(): Promise<string> {
    const totalSupply = contract.methods.totalSupply().call();
    return totalSupply;
  }

  function fetchTokenPrice(): Promise<string> {
    const tokenPrice = contract.methods.tokenPrice().call();
    return tokenPrice;
  }

  function fetchMaxMintAmount(): Promise<string> {
    const maxMintAmount = contract.methods.maxMintAmount().call();
    return maxMintAmount;
  }

  function fetchWhitelistMintStatus(): Promise<boolean> {
    const isWhitelistMintActive = contract.methods
      .isWhitelistMintActive()
      .call();
    return isWhitelistMintActive;
  }

  function fetchPublicMintStatus(): Promise<boolean> {
    const isPublicMintActive = contract.methods.isPublicMintActive().call();
    return isPublicMintActive;
  }

  function fetchBaseURI(): Promise<string> {
    const baseURI = contract.methods.baseURI().call();
    return baseURI;
  }

  return {
    deployedAddress,
    name,
    maxSupply,
    totalSupply,
    tokenPrice,
    maxMintAmount,
    isWhitelistMintActive,
    isPublicMintActive,
    baseURI,
  };
}

export default useMetaHuman;
