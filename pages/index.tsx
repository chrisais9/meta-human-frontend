import type { NextPage } from "next";
import MainLayout from "../components/NavBar/MainLayout";

declare global {
  interface Window {
    klaytn: any;
  }
}

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
    </MainLayout>
  );
};

export default Home;
