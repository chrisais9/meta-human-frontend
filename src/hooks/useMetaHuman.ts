import { useEffect, useState } from "react";
import caver from "@/config/caver";
import ABI from "@/abi/abi.json";
import { AbiItem } from "caver-js";

declare global {
  interface Window {
    klaytn: any;
  }
}

function useMetaHuman() {
  const deployedAddress = "0x70bf0D4514fB47432af5Db1eCE7b534E2e3CDF48";
  const contract = new caver.klay.Contract(ABI as AbiItem[], deployedAddress);
  const [name, setName] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [maxMintAmount, setMaxMintAmount] = useState(0);
  const [isWhitelistMintActive, setIsWhitelistMintActive] = useState(false);
  const [isPublicMintActive, setIsPublicMintActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [
        name,
        totalSupply,
        tokenPrice,
        maxMintAmount,
        isWhitelistMintActive,
        isPublicMintActive,
      ] = await Promise.all([
        fetchCollectionName(),
        fetchTotalSupply(),
        fetchTokenPrice(),
        fetchMaxMintAmount(),
        fetchWhitelistMintStatus(),
        fetchPublicMintStatus(),
      ]);

      setName(name);
      setTotalSupply(totalSupply);
      setTokenPrice(tokenPrice);
      setMaxMintAmount(maxMintAmount);
      setIsWhitelistMintActive(isWhitelistMintActive);
      setIsPublicMintActive(isPublicMintActive);
    };
    fetchData();
  });

  function fetchCollectionName(): Promise<string> {
    const collectionName = contract.methods.name().call();
    return collectionName;
  }

  function fetchTotalSupply(): Promise<number> {
    const totalSupply = contract.methods.totalSupply().call();
    return totalSupply;
  }

  function fetchTokenPrice(): Promise<number> {
    const tokenPrice = contract.methods.tokenPrice().call();
    return tokenPrice;
  }

  function fetchMaxMintAmount(): Promise<number> {
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

  return {
    deployedAddress,
    name,
    totalSupply,
    tokenPrice,
    maxMintAmount,
    isWhitelistMintActive,
    isPublicMintActive,
  };
}

export default useMetaHuman;
