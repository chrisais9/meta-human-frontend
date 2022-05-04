import Head from "next/head";
import Image from "next/image";
import { ReactNode, useCallback, useEffect, useState } from "react";
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
  const [isNavBarShowing, setIsNavBarShowing] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (currentScrollPosition < 160) {
        setLastScrollY(currentScrollPosition);
        return;
      }
      setIsNavBarShowing(currentScrollPosition < lastScrollY);
      setLastScrollY(currentScrollPosition);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <>
      <Head>
        <title>META-HUMAN</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <NavBar isShowing={isNavBarShowing} />
      <main>{children}</main>
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
      {/* <footer>
        <div className="flex justify-center bg-black text-white">
          2022 Meta Labs
        </div>
      </footer> */}
    </>
  );
}

export default MainLayout;
