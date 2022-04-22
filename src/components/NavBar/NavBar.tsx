import { IState } from "@/store/modules";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";
import * as walletActions from "@/store/modules/wallet";

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

function NavBar() {
  const router = useRouter();
  const dispatch = useDispatch();

  const walletAddress = useSelector(
    (state: IState) => state.wallet.walletAddress
  );

  async function onChangeWalletConnection(state: boolean) {
    if (state) {
      if (window.klaytn) {
        const accounts = await window.klaytn.enable();
        dispatch(walletActions.connect(accounts[0]));
      } else {
        window.alert("카이카스 지갑을 설치해주세요");
      }
    }
  }

  return (
    <nav className="fixed top-0 z-50 h-20 w-full px-6 pt-7">
      <div className="mx-auto flex h-full items-center justify-center">
        <div className="flex-grow cursor-pointer font-mono text-2xl font-bold uppercase">
          <Link href="/">META HUMAN</Link>
        </div>
        <div className="hidden items-center lg:flex" id="mobile-menu">
          <ul className="flex space-x-6 uppercase">
            {routerItems.map(({ href, title }) => (
              <li
                key={title}
                className={`rounded p-2 text-2xs ${
                  router.pathname == href
                    ? "bg-black text-header-btn-background"
                    : "bg-header-btn-background text-black"
                }`}
              >
                <Link href={href}>{title}</Link>
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
                width={110}
                onChange={onChangeWalletConnection}
                checked={walletAddress.length !== 0}
                offColor="#F5F6F8"
                onColor="#000000"
                offHandleColor="#000000"
                uncheckedIcon={
                  <div className="flex h-full w-0 items-center justify-center text-2xs">
                    Connect
                  </div>
                }
                checkedIcon={
                  <div className="flex h-full w-20 items-center justify-center text-2xs text-white">
                    Connected
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

export default NavBar;