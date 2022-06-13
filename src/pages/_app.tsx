import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import MainLayout from "@/components/MainLayout";
import wrapper from "@/store/store";
export { reportWebVitals } from "next-axiom";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </MainLayout>
  );
}

export default wrapper.withRedux(MyApp);
