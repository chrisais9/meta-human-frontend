import Image from "next/image";

function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-between bg-red-300">
        <div className="w-1/2 max-w-6xl space-y-4 p-4 text-left text-sm">
          <div className="text-6xl font-black">META HUMAN</div>
        </div>
        <div className="relative h-full w-1/2">
          <Image
            src="/assets/images/metahumanxx.png"
            layout="fill"
            objectFit="cover"
            alt="back"
          />
        </div>
      </div>
      <div className="flex justify-center bg-black text-white">
        2022 Meta Labs
      </div>
    </>
  );
}

export default Home;
