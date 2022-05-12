import Image from "next/image";

function Home() {
  return (
    <>
      <div className="grid h-screen grid-cols-1 sm:grid-cols-2">
        <div className="my-8 mx-16 flex items-end">
          <Image
            src="/assets/icons/mhaf_full_black.svg"
            width={506}
            height={125}
            alt="logo"
          />
        </div>
        <div className="relative mr-14 hidden aspect-square h-full w-full lg:flex">
          <Image
            src="/assets/images/metahuman_1.png"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
