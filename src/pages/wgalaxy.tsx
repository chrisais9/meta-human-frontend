import NFTDetailCard from "@/components/Card/NFTDetailCard";
import INFT from "@/schema/INFT";
import Image from "next/image";
import { useEffect } from "react";

function WGalaxy() {
  return (
    <div className="px-56 pt-36">
      <div className="relative h-20 w-80">
        <Image
          src="/assets/icons/mhaf_full_black.svg"
          layout="fill"
          objectFit="contain"
          alt="logo"
        />
      </div>
      <p className="mt-14 text-sm font-light">
        Meta Human, a new brand that is being created with the community, is
        coming.
        <br />
        <br />
        Meta Humans create a new world called &apos;Metaverse&apos; for
        coexistence with humans and technological innovations in many ways,
        including language, lifestyle, culture, fashion, games, and music, to
        help mankind develop.
        <br />
        <br />
        With exclusive access to the Meta Human collection of 5,000 XX and 5,000
        XY, communities are built to connect the real world to the virtual
        world, and community engagement and sharing are expanding to become
        increasingly real, not imaginary.
        <br />
        <br />
        As the world expands, there is more to come, including meaningful
        member-only merchandise discounts, brand IP sharing, exclusive
        streetwear collaboration, NFT drops, online/offline events, goods, and
        proprietary brand expansion.
        <br />
        <br />
        Meta Human will find its identity on the metaverse with the community.
      </p>
      <p className="mt-52 text-sm font-bold">
        Without community, Meta Humans don’t exist.
        <br /> Enter the galaxy with us.
      </p>

      <div className="mt-56 text-3xl font-black">FANCY WORK MEMBERS</div>

      <div className="mt-14 flex justify-center gap-12 px-40">
        <NFTDetailCard
          nft={
            {
              id: 0,
              name: `SUNG HO`,
              image: `https://ipfs.io/ipfs/Qme42XjH7tBpvqyCqQFoa6UmbXehnRbwk5NDVATCSVQvf3`,
              color: "#8BCDE8",
              attributes: [
                {
                  trait_type: "Background",
                  value: "#8BCDE8",
                },
                {
                  trait_type: "Clothes",
                  value: "dd",
                },
              ],
            } as INFT
          }
        />
        <NFTDetailCard
          nft={
            {
              id: 0,
              name: `HYONG MO`,
              image: `https://ipfs.io/ipfs/Qme42XjH7tBpvqyCqQFoa6UmbXehnRbwk5NDVATCSVQvf3`,
              color: "#8BCDE8",
              attributes: [
                {
                  trait_type: "Background",
                  value: "#8BCDE8",
                },
                {
                  trait_type: "Clothes",
                  value: "dd",
                },
              ],
            } as INFT
          }
        />
        <NFTDetailCard
          nft={
            {
              id: 0,
              name: `IM MYOUNG`,
              image: `https://ipfs.io/ipfs/Qme42XjH7tBpvqyCqQFoa6UmbXehnRbwk5NDVATCSVQvf3`,
              color: "#8BCDE8",
              attributes: [
                {
                  trait_type: "Background",
                  value: "#8BCDE8",
                },
                {
                  trait_type: "Clothes",
                  value: "dd",
                },
              ],
            } as INFT
          }
        />
        <NFTDetailCard
          nft={
            {
              id: 0,
              name: `RYAN`,
              image: `https://ipfs.io/ipfs/Qme42XjH7tBpvqyCqQFoa6UmbXehnRbwk5NDVATCSVQvf3`,
              color: "#8BCDE8",
              attributes: [
                {
                  trait_type: "Background",
                  value: "#8BCDE8",
                },
                {
                  trait_type: "Clothes",
                  value: "dd",
                },
              ],
            } as INFT
          }
        />
      </div>
      <div className="mt-11 flex justify-center pb-32">
        <a
          className="border-b-[0.5px] text-sm font-light"
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
        >
          TOGETHER WITH US IN
          <span className="pl-4">
            <Image
              src="/assets/icons/discord_black.svg"
              width={16}
              height={12}
              alt="discord"
            />
          </span>
        </a>
      </div>
    </div>
  );
}

export default WGalaxy;
