import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import NavBar from "./NavBar/NavBar";

type Props = {
  children?: ReactNode;
};

const socialItems = [
  {
    href: "https://www.twitter.com",
    title: "twitter",
  },
  {
    href: "https://www.instagram.com",
    title: "instagram",
  },
  {
    href: "https://www.discord.com",
    title: "discord",
  },
  {
    href: "https://opensea.io",
    title: "opensea",
  },
];

function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>META-HUMAN</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="fixed bottom-9 right-9 flex w-6 flex-col gap-2">
        {socialItems.map(({ href, title }) => (
          <button
            className="rounded bg-black"
            key={title}
            onClick={() => window.open(href)}
          >
            <Image
              src={`/assets/icons/${title}.svg`}
              width={12}
              height={12}
              alt={title}
            />
          </button>
        ))}
      </div>
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
