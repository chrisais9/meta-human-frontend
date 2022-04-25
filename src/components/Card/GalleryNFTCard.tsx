import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

function GalleryNFTCard({ name, image }: Props) {
  return (
    <div className="transition hover:-translate-y-1 hover:scale-105 ">
      <div className="text-xs font-black">{name}</div>
      <div className="mx-auto flex w-52 flex-col rounded-2xl bg-white shadow-lg shadow-slate-200/60 hover:opacity-50">
        <Image
          className="w-52 rounded-2xl"
          src={`https://ipfs.io/ipfs/${image}`}
          width={208}
          height={208}
          alt="??"
        />
      </div>
    </div>
  );
}

export default GalleryNFTCard;
