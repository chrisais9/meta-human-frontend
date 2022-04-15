import type { NextPage } from "next";
import MainLayout from "../components/NavBar/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="text-4xl mb-5 font-bold">Home</h1>
        <span className="text-7xl">🏡</span>
      </div>
    </MainLayout>
  );
};

export default Home;
