import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

const tempBackgroundColor = [
  "#FF6942",
  "#FF964A",
  "#1E4CC1",
  "#3E237D",
  "#57D181",
  "#BFB344",
];

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

function Mint() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-36 mt-28 flex items-end justify-between">
        <div className="text-[56px] font-black">
          GET
          <br />
          YOUR OWN
          <br />
          META HUMAN
        </div>
        <div>
          And you&apos;re made wonderful would never want you to feel like you
          could
          <br />
          never be right And you&apos;re made wonderful would never want you to
          feel
        </div>
      </div>
      <div className="mt-12 w-screen overflow-hidden">
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
      <div className="flex justify-center">
        <div className="grid w-96 grid-cols-2 items-center justify-items-stretch gap-4">
          <div className="font-bold">Unit Price</div>
          <div className="text-right">
            <Image src="/assets/icons/klay.png" width={12} height={12} />
            <span className="pl-1">432</span>
            <br />
            <span className="pl-1 text-xs text-gray-500">240,000 Won</span>
          </div>
          <div className="font-bold">Quantity</div>
          <div className="text-right">- 1 +</div>
          <div className="font-bold">Total Price</div>
          <div className="text-right">
            <Image src="/assets/icons/klay.png" width={12} height={12} />
            <span className="pl-1">432</span>
            <br />
            <span className="pl-1 text-xs text-gray-500">240,000 Won</span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="rounded-full bg-black py-5 px-20 text-lg font-black uppercase text-white">
          Start
        </button>
      </div>
    </div>
  );
}

export default Mint;
