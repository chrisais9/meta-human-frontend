import "../styles/globals.css";
import type { AppProps } from "next/app";
// import Caver from "caver-js";

// const caver = new Caver("https://api.baobab.klaytn.net:8651/");

// async function testFunction() {
//   const version = await caver.rpc.klay.getClientVersion();
//   window.alert(version);
// }

// testFunction();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
