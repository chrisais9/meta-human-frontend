import type { NextPage } from "next";
import Image from "next/image";
import useContract from "@/hooks/useContract";

const Gallery: NextPage = () => {
  const { collection } = useContract();
  return (
    <div className="container mx-auto mt-32">
      <div className="flex justify-between">
        <div className="sticky top-32 h-screen">
          <Image
            className=""
            src={`https://ipfs.io/ipfs/${collection[0]?.image}`}
            width={400}
            height={400}
            alt="??"
          />
          <div className="mb-4 text-xl font-black uppercase">#XX01</div>
          <div className="grid grid-cols-2 text-xs uppercase">
            <div className="font-bold">Type </div>
            <div>Meta Human </div>
            <div className="font-bold">sex</div>
            <div>xx</div>
            <div className="font-bold">background</div>
            <div>pink</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 overflow-auto p-10">
          {collection.map(({ id, name, image, owner }) => (
            <div
              className="mx-auto flex w-52 rounded-2xl bg-white shadow-lg shadow-slate-200/60 hover:scale-105 hover:opacity-50"
              key={id}
            >
              <Image
                className="w-52 rounded-2xl"
                src={`https://ipfs.io/ipfs/${image}`}
                width={208}
                height={208}
                alt="??"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
