import Caver, { AbiItem, RLPEncodedTransaction } from "caver-js";
import React, { useState } from "react";
import ABI from "@/abi/abi.json";
import useMetaHuman from "@/hooks/useMetaHuman";
import { toast } from "react-toastify";
import { IState } from "@/store/modules";
import { useSelector, useDispatch } from "react-redux";
import * as walletActions from "@/store/modules/wallet";
import caver from "@/config/caver";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import axios from "axios";

type RLPEncodedTrasactionWithRawTransaction<T> = Partial<T> & {
  rawTransaction: string;
};

function Mint() {
  const dispatch = useDispatch();
  const walletAddress = useSelector(
    (state: IState) => state.wallet.walletAddress
  );

  const {
    deployedAddress,
    name: collectionName,
    maxSupply,
    totalSupply,
    tokenPrice,
    maxMintAmount,
    isWhitelistMintActive,
    isPublicMintActive,
  } = useMetaHuman();

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
        deployedAddress
      );

      const senderTransaction = {
        type: "FEE_DELEGATED_SMART_CONTRACT_EXECUTION",
        from: walletAddress,
        to: deployedAddress,
        data: contract.methods
          .mintMetaHuman(caver.utils.toBN(mintAmount))
          .encodeABI(),
        gas: 1000000,
        value: caver.utils.toPeb((+mintAmount * tokenPrice).toString(), "peb"),
      };

      const { rawTransaction: senderRawTransaction } =
        (await caver.klay.signTransaction(
          senderTransaction
        )) as RLPEncodedTrasactionWithRawTransaction<RLPEncodedTransaction>;

      const txHash = (
        await axios.post("/api/gas-station/", {
          senderRawTransaction: senderRawTransaction,
        })
      ).data;

      notifyMintSuccess(txHash);
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
        <div>
          민트된 NFT 수: {totalSupply} / {maxSupply}
        </div>
        <div>지갑당 최대 민팅 가능 NFT 수: {maxMintAmount}</div>
        <div>NFT 가격: {caver.utils.fromPeb(tokenPrice, "KLAY")} KLAY</div>
        <div>
          화이트리스트 민팅 상태:{" "}
          {isWhitelistMintActive ? "시작됨" : "시작 이전"}{" "}
        </div>
        <div>
          퍼블릭 민팅 상태: {isPublicMintActive ? "시작됨" : "시작 이전"}{" "}
        </div>
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
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex justify-center pb-12 text-6xl font-black capitalize">
          line up
        </div>
        <div className="w-screen overflow-hidden">
          <Slider {...settings}>
            {[...Array(10)].map((e, i) => (
              <div key={i} className="-mx-10 pb-8">
                <div
                  style={{
                    backgroundColor: tempBackgroundColor[i % 6],
                  }}
                  className="h-60 w-60 rounded-2xl shadow-xl shadow-slate-200/80"
                >
                  <Image
                    className="rounded-2xl"
                    key={i}
                    src="/assets/images/metahumanxx.png"
                    width={240}
                    height={240}
                    alt="??"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const tempBackgroundColor = [
  "#FF6942",
  "#FF964A",
  "#1E4CC1",
  "#3E237D",
  "#57D181",
  "#BFB344",
];

var settings: Settings = {
  infinite: true,
  draggable: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
};

export default Mint;
