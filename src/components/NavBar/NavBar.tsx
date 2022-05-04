import { IState } from "@/store/modules";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import * as walletActions from "@/store/modules/wallet";
import Image from "next/image";
import WalletSwitch from "../WalletSwitch";
import { setJoyrideWalletSwitch } from "@/store/modules/joyride";

type Props = {
  isShowing: boolean;
};

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
    href: "/roadmap",
    title: "Roadmap",
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

function NavBar({ isShowing }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const walletAddress = useSelector(
    (state: IState) => state.wallet.walletAddress
  );

  const isJoyrideWalletSwitch = useSelector(
    (state: IState) => state.joyride.walletSwitch
  );

  async function onChangeWalletConnection(state: boolean) {
    if (state) {
      if (window.klaytn) {
        const accounts = await window.klaytn.enable();
        dispatch(walletActions.connect(accounts[0]));
      } else {
        window.alert("카이카스 지갑을 설치해주세요");
      }
    } else {
      dispatch(walletActions.connect(""));
    }
  }

  function hideJoyrideWalletSwitch() {
    dispatch(setJoyrideWalletSwitch(false));
  }

  return (
    <nav
      className={`fixed top-0 h-20 w-full px-6 py-7 transition duration-300 lg:z-50 ${
        isShowing ? "traslate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-full items-center justify-between">
        <Link href="/">
          <a>
            <Image
              src="/assets/icons/mhaf.svg"
              width={156}
              height={24}
              alt="back"
            />
          </a>
        </Link>
        <div className="hidden items-center lg:flex" id="mobile-menu">
          <ul className="flex space-x-6 uppercase">
            {routerItems.map(({ href, title }) => (
              <li
                key={title}
                className={
                  router.pathname === href ? "btn-router-active" : "btn-router"
                }
              >
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="hidden items-center lg:flex"
          style={
            isJoyrideWalletSwitch
              ? {
                  boxShadow: "0 0 0 max(200vh, 200vw) rgba(0, 0, 0, .5)",
                  borderRadius: "999px",
                }
              : {}
          }
        >
          <WalletSwitch
            walletAddress={walletAddress}
            onChange={onChangeWalletConnection}
          />
        </div>
        {isJoyrideWalletSwitch ? (
          <>
            <div
              className={`absolute top-0 left-0 hidden h-screen w-screen opacity-5 ${
                isJoyrideWalletSwitch ? "lg:flex" : ""
              }`}
              onClick={hideJoyrideWalletSwitch}
            ></div>
            <div
              className={`absolute top-20 right-5 hidden animate-bounce text-right text-3xl font-black text-white ${
                isJoyrideWalletSwitch ? "lg:flex" : ""
              }`}
            >
              👆🏻 <br />
              Please Connect <br />
              Your Wallet
            </div>
          </>
        ) : null}
        <button className="relative flex h-5 w-6 lg:hidden">
          <Image
            src="/assets/icons/hamburger.svg"
            layout="fill"
            objectFit="cover"
            alt="router"
          />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
