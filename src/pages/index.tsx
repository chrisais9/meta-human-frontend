import Image from "next/image";
import Slider from "react-slick";

const tempBackgroundColor = [
  "#FF6942",
  "#FF964A",
  "#1E4CC1",
  "#3E237D",
  "#57D181",
  "#BFB344",
];

function Home() {
  return (
    <>
      <div className="flex h-screen items-end justify-between">
        <div className="relative mb-10 h-32 w-1/2">
          <Image
            src="/assets/icons/mhaf_full.svg"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div className="relative h-full w-1/2">
          <Image
            src="/assets/images/metahuman_1.png"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
        </div>
      </div>
      <div className="flex h-screen items-center justify-between">
        <div className="relative h-full w-1/2 scale-x-[-1]">
          <Image
            src="/assets/images/metahuman_2.png"
            layout="fill"
            objectFit="cover"
            alt="image"
          />
        </div>
        <div className="w-1/2 max-w-6xl space-y-4 p-4 text-left text-sm">
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
      <div className="flex h-screen items-center justify-center bg-[#A76BB4]">
        <div className="w-full w-1/3 space-y-4 p-4 text-center text-sm text-white">
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
        <div className="w-full">
          <Slider {...settings}>
            {[...Array(10)].map((e, i) => (
              <div
                style={{
                  backgroundColor: tempBackgroundColor[i % 6],
                }}
                key={i}
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
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

var settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  cssEase: "linear",
};

export default Home;
