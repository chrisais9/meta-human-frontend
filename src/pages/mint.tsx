import Caver, { AbiItem, TransactionReceipt } from "caver-js";
import React, { useState } from "react";
import ABI from "@/abi/abi.json";
import useContract from "@/hooks/useContract";
import { toast } from "react-toastify";
import { IState } from "@/store/modules";
import { useSelector, useDispatch } from "react-redux";
import * as walletActions from "@/store/modules/wallet";

function Mint() {
  const dispatch = useDispatch();
  const walletAddress = useSelector(
    (state: IState) => state.wallet.walletAddress
  );

  const { name: collectionName, totalSupply } = useContract();

  const [mintAmount, setMintAmount] = useState("1");

  const handleChangeMintAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMintAmount(event.target.value);
  };

  async function connectWallet() {
    if (window.klaytn) {
      const accounts = await window.klaytn.enable();
      dispatch(walletActions.connect(accounts[0]));
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

      contract.methods
        .mintHoneyBadger(caver.utils.toBN(mintAmount))
        .send({
          from: walletAddress,
          value: caver.utils.toPeb((+mintAmount * 0.1).toString(), "KLAY"),
          gas: 1000000,
        })
        .then((receipt: TransactionReceipt) => {
          notifyMintSuccess(receipt.transactionHash);
        })
        .catch((err: any) => {
          try {
            var receipt = JSON.parse(
              err.stack.substring(
                err.stack.indexOf("{"),
                err.stack.lastIndexOf("}") + 1
              )
            );
            notifyMintFail(receipt.transactionHash);
          } catch (error) {}
        });
    } else {
      window.alert("카이카스 지갑을 설치해주세요");
    }
  }

  function notifyMintSuccess(txHash: string) {
    toast.success(
      <>
        <div>🦄 민팅 성공</div>
        <a
          className="text-blue-600 underline"
          href={`https://baobab.scope.klaytn.com/tx/${txHash}`}
          target="_blank"
          rel="noreferrer"
        >
          영수증 보기
        </a>
      </>,
      {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
      }
    );
  }

  function notifyMintFail(txHash: string) {
    toast.error(
      <>
        <div>민팅 실패</div>
        <a
          className="text-blue-600 underline"
          href={`https://baobab.scope.klaytn.com/tx/${txHash}`}
          target="_blank"
          rel="noreferrer"
        >
          영수증 보기
        </a>
      </>,
      {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
      }
    );
  }

  return (
    <div className="container mx-auto mt-32">
      <div className="mb-4 flex flex-col rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <div>
          카이카스 지갑주소:{" "}
          {walletAddress.length == 0 ? "로그인 필요" : walletAddress}
        </div>
        <hr className="my-6" />
        <div>콜렉션이름: {collectionName}</div>
        <div>민트된 NFT 수: {totalSupply}</div>
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
  );
}

export default Mint;
