import type { NextPage } from "next";
import Image from "next/image";
import MainLayout from "../components/NavBar/MainLayout";
import useContract from "../hooks/useContract";

const Gallery: NextPage = () => {
  const { collection } = useContract();
  return (
    <MainLayout>
      <div className="container mx-auto mt-32">
        <div>총 갯수: {collection.length}</div>
        <div className="grid justify-items-center grid-cols-1 lg:grid-cols-4 gap-4 ">
          {collection.map(({ id, name, image, owner }) => (
            <div key={id}>
              <Image
                src={`https://ipfs.io/ipfs/${image}`}
                width={400}
                height={400}
                alt="??"
              />
              <div className="text-xl">{name}</div>
              <div className="text-xs text-gray-600">{owner}</div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Gallery;
