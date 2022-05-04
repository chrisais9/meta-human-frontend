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
      {/* <div className="flex h-screen flex-col items-center justify-center">
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
      </div> */}
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
