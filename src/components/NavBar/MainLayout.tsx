import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>META-HUMAN</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
