import Image from "next/image";

type Props = {
  id: number;
  name: string;
  image: string;
  selected: boolean;
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

function NFTSimpleCard({ id, name, image, selected }: Props) {
  return (
    <div className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105">
      <div className="mb-3 text-xs font-black">{name}</div>
      <div
        style={{
          backgroundColor: backgroundColor[(id - 1) % backgroundColor.length],
        }}
        className={`mx-auto flex w-52 animate-fade-in flex-col rounded-2xl bg-red-100 shadow-lg shadow-slate-200/60 hover:brightness-75 ${
          selected ? "ring-2 ring-black" : ""
        }`}
      >
        <Image
          className="w-52 rounded-2xl"
          src={image}
          width={208}
          height={208}
          alt={name}
        />
      </div>
    </div>
  );
}

export default NFTSimpleCard;