import Image from "next/image";

function Home() {
  return (
    <>
      <div className="flex h-screen items-center justify-between px-1">
        <div className="w-1/2 max-w-6xl space-y-4 p-4 text-left text-sm">
          <div className="text-6xl font-black">META HUMAN</div>
          <p className="text-xs">
            And you are made wonderful would never want you to feel like you
            could never be rightAnd
            <br /> you are made wonderful would never want you to feel like you
            could never be rightAnd you are made wonderful would never want you
            <br />
            to feel like you could never be rightLove is all you want, I would
            never do you wrong Hold it down and give me some time
            <br />
            <br />
            And you are made wonderful would never want you to feel like you
            <br />
            could never be rightAnd you are made wonderful would never want you
            to feel like you could never be rightAnd you are made wonderful
            <br />
            would never want you to feel like you could never be rightLove is
            all you want, I would never do you wrong Hold it down and give me
            some time
          </p>
        </div>
        <div className="flex justify-center self-end">
          <Image
            src="/assets/images/metahumanxx.png"
            height={646}
            width={646}
            alt="back"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
