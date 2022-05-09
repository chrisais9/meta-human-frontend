import Image from "next/image";

function Home() {
  return (
    <>
      <div className="grid h-screen grid-cols-1 items-center justify-between lg:grid-cols-2">
        <div className="flex h-full max-w-6xl flex-col justify-end pb-16 pl-16 text-left text-sm">
          <Image
            src="/assets/icons/mhaf_full.svg"
            width={125}
            height={506}
            objectFit="contain"
            alt="logo"
          />
          <p className="text-sm">
            And you are made wonderful would never want you to feel like you
            could never be rightAnd
            <br /> you are made wonderful would never want you to feel like you
            could never be rightAnd you are
            <br /> made wonderful would never want you to feel like you could
            never be rightLove is all you want, I<br /> would never do you wrong
            Hold it down and give me some time <br />
            <br />
            And you are made wonderful would never want you to feel like you
            could never be rightAnd
            <br /> you are made wonderful would never want you to feel like you
            could never be rightAnd you are
            <br /> made wonderful would never want you to feel like you could
            never be rightLove is all you want, I<br /> would never do you wrong
            Hold it down and give me some time
          </p>
        </div>
        <div className="relative h-full">
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
