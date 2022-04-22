import Image from "next/image";

function Home() {
  return (
    <>
      <video
        className="hidden h-screen w-full transform object-cover lg:block"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/beanzwuzhere.mp4" />
      </video>
      <Image
        className="min-w-screen overlay-item absolute bottom-0 top-0 left-0 -z-10 h-screen w-full transform object-cover object-center lg:block"
        src="/assets/images/beanzwashere.jpg"
        layout="fill"
        alt="background"
      />
    </>
  );
}

export default Home;
