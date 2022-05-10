import Image from "next/image";

function Galaxy() {
  return (
    <div className="container h-screen w-screen px-56 pt-36">
      <div className="relative h-20 w-80">
        <Image
          src="/assets/icons/mhaf_full_white.svg"
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
        Meta Humans create a new world called 'Metaverse' for coexistence with
        humans and technological innovations in many ways, including language,
        lifestyle, culture, fashion, games, and music, to help mankind develop.
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

      <div className="relative h-full w-full">
        <Image
          src="/assets/images/team.png"
          layout="fill"
          objectFit="contain"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Galaxy;
