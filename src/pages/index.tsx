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
      <div className="flex h-screen items-center justify-between bg-blue-300">
        <div className="relative h-full w-1/2">
          <Image
            src="/assets/images/metahumanxx.png"
            layout="fill"
            objectFit="cover"
            alt="back"
          />
        </div>
        <div className="w-1/2 max-w-6xl space-y-4 p-4 text-left text-sm">
          <div className="text-6xl font-black">META HUMAN</div>
          <p>
            And you are made wonderful would never want you to feel like you
            could never be rightAnd you are made wonderful would never want you
            to feel like you could never be rightAnd you are made wonderful
            would never want you to feel like you could never be rightLove is
            all you want, I would never do you wrong Hold it down and give me
            some time And you are made wonderful would never want you to feel
            like you could never be rightAnd you are made wonderful would never
            want you to feel like you could never be rightAnd you are made
            wonderful would never want you to feel like you could never be
            rightLove is all you want, I would never do you wrong Hold it down
            and give me some time
          </p>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center bg-cyan-100">
        <div className="w-full w-1/3 space-y-4 p-4 text-center text-sm">
          <div className="text-6xl font-black">META HUMAN</div>
          <p>
            And you are made wonderful would never want you to feel like you
            could never be rightAnd you are made wonderful would never want you
            to feel like you could never be rightAnd you are made wonderful
            would never want you to feel like you could never be rightLove is
            all you want, I would never do you wrong Hold it down and give me
            some time And you are made wonderful would never want you to feel
            like you could never be rightAnd you are made wonderful would never
            want you to feel like you could never be rightAnd you are made
            wonderful would never want you to feel like you could never be
            rightLove is all you want, I would never do you wrong Hold it down
            and give me some time
          </p>
        </div>
      </div>
      <div className="no-scrollbar flex h-screen items-center justify-between overflow-auto bg-red-300">
        <div className="flex shrink-0 gap-4 overflow-x-auto pl-4">
          {[...Array(10)].map((e, i) => (
            <div
              key={i}
              className="flex w-52 rounded-2xl bg-white shadow-lg shadow-slate-200/60 hover:opacity-50"
            >
              <Image
                className="w-52 rounded-2xl"
                src="/assets/images/metahumanxx.png"
                width={208}
                height={208}
                alt="??"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
