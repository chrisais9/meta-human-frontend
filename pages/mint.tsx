import Caver, { AbiItem } from "caver-js";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import MainLayout from "../components/NavBar/MainLayout";
import ABI from "../abi/abi.json";

const Mint: NextPage = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const [collectionName, setCollectionName] = useState("");
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    fetchCollectionName();
    fetchTotalSupply();

    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  async function fetchCollectionName() {
    const caver = new Caver(window.klaytn);
    const contract = new caver.klay.Contract(
      ABI as AbiItem[],
      "0xa4e0931470700187317B551B1c06733Df6645758"
    );
    const collectionName = await contract.methods.name().call();

    setCollectionName(collectionName);
  }

  async function fetchTotalSupply() {
    const caver = new Caver(window.klaytn);
    const contract = new caver.klay.Contract(
      ABI as AbiItem[],
      "0xa4e0931470700187317B551B1c06733Df6645758"
    );
    const totalSupply = await contract.methods.totalSupply().call();

    setTotalSupply(totalSupply);
  }

  async function connectWallet() {
    const accounts = await window.klaytn.enable();
    setWalletAddress(accounts[0]);
  }

  async function mint() {
    const caver = new Caver(window.klaytn);
    const contract = new caver.klay.Contract(
      ABI as AbiItem[],
      "0xa4e0931470700187317B551B1c06733Df6645758"
    );

    const receipt = await contract.methods.mintHoneyBadger("1").send({
      from: walletAddress,
      value: caver.utils.toPeb("0.1", "KLAY"),
      gas: 1000000,
    });
    console.log(receipt);
    if (!receipt.txError) {
      alert("민팅 성공");
      window.location.reload();
    }
  }

  return (
    <MainLayout>
      <div className="container mx-auto mt-32">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div>카이카스 지갑주소: {walletAddress}</div>
          <hr className="my-6" />
          <div>콜렉션이름: {collectionName}</div>
          <div>민트된 NFT 수: {totalSupply}</div>
          <hr className="my-6" />
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">민팅할 수량</label>
            <input
              className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 mb-3"
              id="number"
              type="number"
              placeholder="1"
            />
            <p className="text-xs italic">최대 5개까지 민팅 가능합니다.</p>
          </div>
          <div className="flex items-center justify-center">
            {walletAddress.length == 0 ? (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={connectWallet}
              >
                지갑 연결하기
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
