import Image from "next/image";

function Home() {
  return (
    <>
      <div className="mx-auto mt-32">
        <div className="fade-in flex h-full w-full items-end px-1">
          <div className="h-full px-4 pb-6 lg:px-0">
            <h3 className="font-800 top-0 pb-4 font-sans text-4xl font-black uppercase  tracking-tight lg:text-6xl">
              Meta Human
            </h3>
            <div className="max-w-1/2 mx-auto max-w-6xl space-y-4 text-left font-mono text-xs lg:text-sm ">
              <p className="font-300">
                And youre made wonderful would never want you to feel like you
                could never be rightAnd youre made wonderful would never want
                you to feel like you could never be rightAnd youre made
                wonderful would never want you to feel like you could never be
                rightLove is all you want, I would never do you wrong Hold it
                down and give me some time And youre made wonderful would never
                want you to feel like you could never be rightAnd youre made
                wonderful would never want you to feel like you could never be
                rightAnd youre made wonderful would never want you to feel like
                you could never be rightLove is all you want, I would never do
                you wrong Hold it down and give me some time
              </p>
            </div>
          </div>
          <div className="hidden w-full justify-end lg:flex">
            <img src="/assets/images/metahumanxx.png" alt="back" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
