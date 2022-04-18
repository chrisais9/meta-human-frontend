import type { NextPage } from "next";
import Image from "next/image";
import MainLayout from "../components/NavBar/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <video
        className="w-full transform hidden lg:block h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/beanzwuzhere.mp4" />
      </video>
      <Image
        className="min-w-screen w-full lg:block bottom-0 transform h-screen object-cover absolute top-0 left-0 object-center overlay-item -z-10"
        src="/assets/images/beanzwashere.jpg"
        layout="fill"
        alt="background"
      ></Image>
    </MainLayout>
  );
};

export default Home;
