import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import MainLayout from "../components/NavBar/MainLayout";
import useInterval from "../hooks/useInterval";
import caver from "../service/klaytn/caver";

const Mint: NextPage = () => {
  const [version, setVersion] = useState("");
  const [currectBlockNumber, setCurrentBlockNumber] = useState(0);
  const [wallectAddress, setWalletAddress] = useState("");

  let getBlockNumber = async () => {
    const blockNumber = await caver.klay.getBlockNumber();
    setCurrentBlockNumber(blockNumber);
  };

  async function connectWallet() {
    const accounts = await window.klaytn.enable();
    setWalletAddress(accounts[0]);
  }

  function mint() {}

  useInterval(() => {
    getBlockNumber();
  }, 1000);

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    setVersion(caver.version);

    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return (
    <MainLayout>
      <div className="container mx-auto mt-32">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div>클레이튼 block number: {currectBlockNumber}</div>
          <div>클레이튼 version: {version}</div>
          <div>카이카스 지갑주소: {wallectAddress}</div>
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
            {wallectAddress.length == 0 ? (
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
