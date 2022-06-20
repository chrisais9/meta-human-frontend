import useMetaHuman from "@/hooks/useMetaHuman";
import { IState } from "@/store/modules";
import Caver, { AbiItem } from "caver-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import ABI from "@/abi/MetaHuman.json";
import { MetaHuman } from "types/web3-v1-contracts";

function Admin() {
  const {
    deployedAddress,
    tokenPrice,
    maxMintAmount,
    isWhitelistMintActive,
    isPublicMintActive,
    baseURI,
  } = useMetaHuman();

  const walletAddress = useSelector(
    (state: IState) => state.wallet.walletAddress
  );

  const [whitelistMintPrice, setWhitelistMintPrice] = useState("0");
  const [whitelistMintAmount, setWhitelistMintAmount] = useState("0");
  const [whitelistMerkleHash, setWhitelistMerkleHash] = useState("");

  const [publicMintPrice, setPublicMintPrice] = useState("0");
  const [publicMintAmount, setPublicMintAmount] = useState("0");

  const [revealURI, setRevealURI] = useState("");

  const handleChangeWhitelistMintPrice = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWhitelistMintPrice(event.target.value);
  };

  const handleChangeWhitelistMintAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWhitelistMintAmount(event.target.value);
  };

  const handleChangeWhitelistMerkleHash = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWhitelistMerkleHash(event.target.value);
  };

  const handleChangePublicMintPrice = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublicMintPrice(event.target.value);
  };

  const handleChangePublicMintAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublicMintAmount(event.target.value);
  };

  const handleChangeRevealURI = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRevealURI(event.target.value);
  };

  async function startWhitelistMint() {
    if (
      !whitelistMintAmount ||
      !whitelistMintPrice ||
      !whitelistMerkleHash ||
      whitelistMintAmount === "0" ||
      whitelistMintPrice === "0" ||
      whitelistMerkleHash.length === 0
    ) {
      window.alert("필드를 확인하세요");
      return;
    }

    if (!window.klaytn) {
      window.alert("카이카스 지갑을 설치하세요");
      return;
    }

    const caver = new Caver(window.klaytn);
    const contract = caver.contract.create(
      ABI as AbiItem[],
      deployedAddress
    ) as any as MetaHuman;

    const priceInKlay = caver.utils.toPeb(whitelistMintPrice);

    await contract.methods
      .startWhitelistMint(whitelistMintAmount, priceInKlay, whitelistMerkleHash)
      .send({
        from: walletAddress,
        gas: 1000000,
      });
  }

  async function stopWhitelistMint() {
    if (!window.klaytn) {
      window.alert("카이카스 지갑을 설치하세요");
      return;
    }

    const caver = new Caver(window.klaytn);
    const contract = caver.contract.create(
      ABI as AbiItem[],
      deployedAddress
    ) as any as MetaHuman;
    await contract.methods.pauseWhitelistMint().send({
      from: walletAddress,
      gas: 1000000,
    });
  }

  async function startPublicMint() {
    if (
      !publicMintAmount ||
      !publicMintPrice ||
      publicMintAmount === "0" ||
      publicMintPrice === "0"
    ) {
      window.alert("필드를 확인하세요");
      return;
    }

    if (!window.klaytn) {
      window.alert("카이카스 지갑을 설치하세요");
      return;
    }

    const caver = new Caver(window.klaytn);
    const contract = caver.contract.create(
      ABI as AbiItem[],
      deployedAddress
    ) as any as MetaHuman;

    const priceInKlay = caver.utils.toPeb(publicMintPrice);

    await contract.methods
      .startPublicMint(
        caver.utils.toBN(publicMintAmount),
        caver.utils.toBN(priceInKlay)
      )
      .send({
        from: walletAddress,
        gas: 1000000,
      });
  }

  async function stopPublicMint() {
    if (!window.klaytn) {
      window.alert("카이카스 지갑을 설치하세요");
      return;
    }

    const caver = new Caver(window.klaytn);
    const contract = caver.contract.create(
      ABI as AbiItem[],
      deployedAddress
    ) as any as MetaHuman;
    await contract.methods.pausePublicMint().send({
      from: walletAddress,
      gas: 1000000,
    });
  }

  async function updateBaseURI() {
    const caver = new Caver(window.klaytn);
    const contract = caver.contract.create(
      ABI as AbiItem[],
      deployedAddress
    ) as any as MetaHuman;

    await contract.methods
      .setBaseURI(`https://ipfs.io/ipfs/${revealURI}/`)
      .send({
        from: walletAddress,
        gas: 1000000,
      });
  }

  return (
    <div className="container mx-auto mt-32">
      {walletAddress ===
      "0xAB6D4857696484ECd8d355751ba26186E7393Cf2".toLowerCase() ? (
        <div>
          <div className="mb-2 text-3xl font-bold">화이트 리스트 민팅</div>
          <div className="mb-12 flex flex-col gap-4 rounded border-4 border-black bg-white px-8 pt-6 pb-8">
            <div>상태: {isWhitelistMintActive ? "진행중" : "중단됨"}</div>
            <div>가격: {Caver.utils.fromPeb(tokenPrice, "KLAY")} KLAY</div>
            <div>민팅 가능 수량(Per Tx): {maxMintAmount}</div>
            <hr />
            <div>가격:</div>
            <input
              className="mb-3 w-full appearance-none rounded border border-blue-200 py-2 px-3 shadow"
              type="number"
              value={whitelistMintPrice}
              onChange={handleChangeWhitelistMintPrice}
            />
            <div>최대 민팅 수량:</div>
            <input
              className="mb-3 w-full appearance-none rounded border border-blue-200 py-2 px-3 shadow"
              type="number"
              value={whitelistMintAmount}
              onChange={handleChangeWhitelistMintAmount}
            />
            <div>화이트리스트 머클루트 해시:</div>
            <input
              className="mb-3 w-full appearance-none rounded border border-blue-200 py-2 px-3 shadow"
              value={whitelistMerkleHash}
              onChange={handleChangeWhitelistMerkleHash}
            />
            <div className="flex gap-4">
              <button
                className="rounded-lg bg-green-500 p-2"
                onClick={startWhitelistMint}
              >
                시작
              </button>
              <button
                className="rounded-lg bg-red-500 p-2"
                onClick={stopWhitelistMint}
              >
                종료
              </button>
            </div>
          </div>
          <div className="mb-2 text-3xl font-bold">퍼블릭 민팅</div>
          <div className="mb-12 flex flex-col gap-4 rounded border-4 border-black bg-white px-8 pt-6 pb-8">
            <div>상태: {isPublicMintActive ? "진행중" : "중단됨"}</div>
            <div>가격: {Caver.utils.fromPeb(tokenPrice, "KLAY")} KLAY</div>
            <div>민팅 가능 수량(Per Tx): {maxMintAmount}</div>
            <hr />
            <div>가격:</div>
            <input
              className="mb-3 w-full appearance-none rounded border border-blue-200 py-2 px-3 shadow"
              type="number"
              value={publicMintPrice}
              onChange={handleChangePublicMintPrice}
            />
            <div>최대 민팅 수량:</div>
            <input
              className="mb-3 w-full appearance-none rounded border border-blue-200 py-2 px-3 shadow"
              type="number"
              value={publicMintAmount}
              onChange={handleChangePublicMintAmount}
            />
            <div className="flex gap-4">
              <button
                className="rounded-lg bg-green-500 p-2"
                onClick={startPublicMint}
              >
                시작
              </button>
              <button
                className="rounded-lg bg-red-500 p-2"
                onClick={stopPublicMint}
              >
                종료
              </button>
            </div>
          </div>

          <div className="mb-2 text-3xl font-bold">리빌(reveal)</div>
          <div className="mb-4 flex flex-col gap-4 rounded border-4 border-black bg-white px-8 pt-6 pb-8">
            <div>상태: {baseURI ? "리빌 완료" : "리빌 되지 않음"} </div>
            <hr />
            <div>IPFS 해시값: </div>
            <input
              className="mb-3 w-full appearance-none rounded border border-blue-200 py-2 px-3 shadow"
              type="text"
              value={revealURI}
              onChange={handleChangeRevealURI}
            />
            <button
              className="rounded-lg bg-green-500 p-2"
              onClick={updateBaseURI}
            >
              리빌
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-screen justify-center text-3xl font-black">
          어드민 지갑 연결 필요
        </div>
      )}
    </div>
  );
}

export default Admin;
