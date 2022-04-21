import Image from "next/image";

type Props = {
  image: string;
};

function GalleryNFTCard({ image }: Props) {
  return (
    <div className="mx-auto flex w-52 rounded-2xl bg-white shadow-lg shadow-slate-200/60 hover:scale-105 hover:opacity-50">
      <Image
        className="w-52 rounded-2xl"
        src={`https://ipfs.io/ipfs/${image}`}
        width={208}
        height={208}
        alt="??"
      />
    </div>
  );
}

export default GalleryNFTCard;
