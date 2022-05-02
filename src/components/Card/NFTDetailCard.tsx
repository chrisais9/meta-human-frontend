import INFT from "@/schema/INFT";
import Image from "next/image";

type Props = {
  nft: INFT;
};

const backgroundColor = [
  "#8BCDE8",
  "#EB6FCC",
  "#637C6D",
  "#BFB344",
  "#57D181",
  "#FF6942",
  "#FF964A",
  "#1E4CC1",
  "#3E237D",
];

function NFTDetailCard({ nft }: Props) {
  return (
    <div>
      <div
        style={{
          backgroundColor:
            backgroundColor[(nft.id - 1) % backgroundColor.length],
        }}
        className="mb-4 flex rounded-2xl shadow-lg shadow-slate-200/60"
      >
        <Image
          className="rounded-2xl"
          src={nft.image}
          width={400}
          height={400}
          alt="??"
        />
      </div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xl font-black uppercase">{nft.name}</div>
        <button
          className="flex rounded-full bg-black p-1"
          onClick={() => window.open("https://opensea.io")}
        >
          <Image
            src="/assets/icons/opensea_white.svg"
            width={12}
            height={12}
            alt="opensea"
          />
        </button>
      </div>
      <div className="grid grid-cols-2 text-xs uppercase">
        <div className="font-bold">Type </div>
        <div>Meta Human </div>
        <div className="font-bold">sex</div>
        <div>xx</div>
        <div className="font-bold">background</div>
        <div>pink</div>
      </div>
    </div>
  );
}

export default NFTDetailCard;
