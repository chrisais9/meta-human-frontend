import Caver, { AbiItem } from "caver-js";
import type { NextPage } from "next";
import React, { useState } from "react";
import MainLayout from "../components/NavBar/MainLayout";
import ABI from "../abi/abi.json";
import useContract from "../hooks/useContract";

const Mint: NextPage = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const { name: collectionName, totalSupply, collection } = useContract();

  const [mintAmount, setMintAmount] = useState("1");

  const handleChangeMintAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMintAmount(event.target.value);
  };

  async function connectWallet() {
    if (window.klaytn) {
      const accounts = await window.klaytn.enable();
      setWalletAddress(accounts[0]);
    } else {
      window.alert("카이카스 지갑을 설치해주세요");
    }
  }

  async function mint() {
    if (window.klaytn) {
      const caver = new Caver(window.klaytn);
      const contract = new caver.klay.Contract(
        ABI as AbiItem[],
        "0xa4e0931470700187317B551B1c06733Df6645758"
      );

      const receipt = await contract.methods
        .mintHoneyBadger(caver.utils.toBN(mintAmount))
        .send({
          from: walletAddress,
          value: caver.utils.toPeb(+mintAmount * 0.1, "KLAY"),
          gas: 1000000,
        });
      if (!receipt.txError) {
        window.alert("민팅 성공");
        window.location.reload();
      }
    } else {
      window.alert("카이카스 지갑을 설치해주세요");
    }
  }

  return (
    <MainLayout>
      <div className="container mx-auto mt-32">
        <div className="mb-4 flex flex-col rounded bg-white px-8 pt-6 pb-8 shadow-md">
          <div>
            카이카스 지갑주소:{" "}
            {walletAddress.length == 0 ? "로그인 필요" : walletAddress}
          </div>
          <hr className="my-6" />
          <div>콜렉션이름: {collectionName}</div>
          <div>민트된 NFT 수: {totalSupply}</div>
          <div>불러온 NFT 수: {collection.length}</div>
          <hr className="my-6" />
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold">민팅할 수량</label>
            <input
              className="mb-3 w-full appearance-none rounded border border-blue-200 py-2 px-3 shadow"
              type="number"
              value={mintAmount}
              onChange={handleChangeMintAmount}
            />
            <p className="text-xs italic">최대 5개까지 민팅 가능합니다.</p>
          </div>
          <div className="flex items-center justify-center">
            {walletAddress.length == 0 ? (
              <button
                className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-600"
                type="button"
                onClick={connectWallet}
              >
                지갑 연결하기
              </button>
            ) : (
              <button
                className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-600"
                type="button"
                onClick={mint}
              >
                민팅하기
              </button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Mint;
