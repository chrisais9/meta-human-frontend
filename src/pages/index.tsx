import Image from "next/image";
import { useState } from "react";
import Slider, { Settings } from "react-slick";

const tempBackgroundColor = [
  "#FF6942",
  "#FF964A",
  "#1E4CC1",
  "#3E237D",
  "#57D181",
  "#BFB344",
];

function Home() {
  const handleChangeBackground = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackground(event.target.value);
  };
  const [background, setBackground] = useState("#52117c");
  return (
    <>
      <div className="flex h-screen items-end justify-center">
        <div className="relative mb-10 h-32 w-1/2">
          <Image
            src="/assets/icons/mhaf_full.svg"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div className="relative hidden h-full w-1/2 lg:flex">
          <Image
            priority
            src="/assets/images/metahuman_1.png"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
        </div>
      </div>
      <div className="grid h-screen grid-cols-1 items-center justify-between lg:grid-cols-2">
        <div className="relative h-full scale-x-[-1]">
          <Image
            src="/assets/images/metahuman_2.png"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
        </div>
        <div className="max-w-6xl space-y-4 p-4 text-left text-sm">
          <div className="mb-14 text-6xl font-black">META HUMAN</div>
          <p>
            And you are made wonderful would never want you to feel like you
            could never be rightAnd you are made wonderful would never want you
            to feel like you could never be rightAnd you are made wonderful
            would never want you to feel like you could never be rightLove is
            all you want, I would never do you wrong Hold it down and give me
            some time <br />
            <br />
            And you are made wonderful would never want you to feel like you
            could never be rightAnd you are made wonderful would never want you
            to feel like you could never be rightAnd you are made wonderful
            would never want you to feel like you could never be rightLove is
            all you want, I would never do you wrong Hold it down and give me
            some time
          </p>
        </div>
      </div>
      <div
        style={{ backgroundColor: `${background}` }}
        className={`flex h-screen items-center justify-center`}
      >
        <input
          type="text"
          value={background}
          onChange={handleChangeBackground}
        ></input>
        <div className="w-1/3 space-y-4 p-4 text-center text-sm text-white">
          <div className="mb-14 text-6xl font-black">META HUMAN</div>
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
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex justify-center pb-12 text-6xl font-black capitalize">
          line up
        </div>
        <div className="w-screen overflow-hidden">
          <Slider {...settings}>
            {[...Array(10)].map((e, i) => (
              <div key={i} className="-mx-10 pb-8">
                <div
                  style={{
                    backgroundColor: tempBackgroundColor[i % 6],
                  }}
                  className="h-60 w-60 rounded-2xl shadow-xl shadow-slate-200/80"
                >
                  <Image
                    className="rounded-2xl"
                    key={i}
                    src="/assets/images/metahumanxx.png"
                    width={240}
                    height={240}
                    alt="??"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

var settings: Settings = {
  infinite: true,
  draggable: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  cssEase: "linear",
};

export default Home;
