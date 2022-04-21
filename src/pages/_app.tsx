import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import MainLayout from "@/components/MainLayout";
import wrapper from "@/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </MainLayout>
  );
}

export default wrapper.withRedux(MyApp);
