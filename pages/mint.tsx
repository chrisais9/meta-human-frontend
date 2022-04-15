import type { NextPage } from "next";
import MainLayout from "../components/NavBar/MainLayout";

const Mint: NextPage = () => {
  return (
    <MainLayout>
      <div className="container">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input type="email" className="peer" />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg
            className="motion-reduce:hidden animate-spin ..."
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </button>
      </div>
    </MainLayout>
  );
};

export default Mint;
