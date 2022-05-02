import Image from "next/image";

type Props = {
  id: number;
  name: string;
  image: string;
  color: string;
  selected: boolean;
};

function NFTSimpleCard({ id, name, image, color, selected }: Props) {
  return (
    <div className="cursor-pointer">
      <div className="mb-3 text-xs font-black">{name}</div>
      <div
        style={{
          backgroundColor: color,
        }}
        className={`relative flex aspect-square animate-fade-in flex-col rounded-2xl bg-red-100 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:brightness-75 ${
          selected ? "ring-2 ring-black" : ""
        }`}
      >
        <Image
          className="h-full w-full rounded-2xl"
          src={image}
          layout="fill"
          objectFit="cover"
          alt={name}
        />
      </div>
    </div>
  );
}

export default NFTSimpleCard;
