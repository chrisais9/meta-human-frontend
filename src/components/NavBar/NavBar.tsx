import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Switch from "react-switch";

const routerItems = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/mint",
    title: "Buy",
  },
  {
    href: "/gallery",
    title: "Gallery",
  },
  {
    href: "/team",
    title: "Team",
  },
  {
    href: "/shop",
    title: "Shop",
  },
];

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

export default function NavBar() {
  const router = useRouter();

  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <nav className="fixed top-0 z-50 h-20 w-full px-6 pt-7">
      <div className="mx-auto flex h-full items-center justify-center">
        <Link href="/">
          <span className="flex-grow cursor-pointer font-mono text-2xl font-bold">
            META HUMAN
          </span>
        </Link>
        <div className="hidden items-center lg:flex" id="mobile-menu">
          <ul className="flex space-x-6">
            {routerItems.map(({ href, title }) => (
              <li
                key={title}
                className={`rounded p-2 text-2xs ${
                  router.pathname == href
                    ? "bg-black text-header-btn-background"
                    : "bg-header-btn-background text-black"
                }`}
              >
                <Link href={href}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
            {socialItems.map(({ href, title }) => (
              <li
                key={title}
                className="rounded bg-header-btn-background p-2 text-2xs"
              >
                <a target="_blank" href={href} rel="noopener noreferrer">
                  <Image
                    src={`/assets/icons/${title}.svg`}
                    width="12px"
                    height="12px"
                    alt={title}
                  />
                </a>
              </li>
            ))}
            <li>
              <Switch
                width={150}
                onChange={setIsWalletConnected}
                checked={isWalletConnected}
                offColor="#F5F6F8"
                onColor="#000000"
                offHandleColor="#000000"
                uncheckedIcon={
                  <div className="flex h-full items-center justify-end text-base">
                    Connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                }
                checkedIcon={
                  <div className="flex h-full items-center justify-start text-base text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connected
                  </div>
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
