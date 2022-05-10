import { IState } from "@/store/modules";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import * as walletActions from "@/store/modules/wallet";
import Image from "next/image";
import WalletSwitch from "../WalletSwitch";
import { setJoyrideWalletSwitch } from "@/store/modules/joyride";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import MobileMenuModal from "../Modal/MobileMenuModal";
import { routerItems, socialItems } from "@/config/router";

type Props = {
  isShowing: boolean;
};

function NavBar({ isShowing }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const walletAddress = useSelector(
    (state: IState) => state.wallet.walletAddress
  );

  const isJoyrideWalletSwitch = useSelector(
    (state: IState) => state.joyride.walletSwitch
  );

  const [isMobileMenuShowing, setIsMobileMenuShowing] = useState(false);

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
    <>
      <nav
        className={`fixed top-0 z-50 h-20 w-full px-6 py-7 transition duration-300 ${
          isShowing ? "traslate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-full cursor-pointer items-center justify-between">
          <div className="flex dark:hidden">
            <Link href="/" passHref>
              <Image
                src="/assets/icons/mhaf.svg"
                width={156}
                height={24}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden dark:flex">
            <Link href="/" passHref>
              <Image
                src="/assets/icons/mhaf_white.svg"
                width={156}
                height={24}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden items-center lg:flex">
            <ul className="flex space-x-6 uppercase">
              {routerItems.map(({ href, title }) => (
                <li
                  key={title}
                  className={
                    router.pathname === href
                      ? "btn-router-active dark:btn-router-active-dark"
                      : "btn-router dark:btn-router-dark"
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
          {isJoyrideWalletSwitch && (
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
          )}
          <div className="flex lg:hidden">
            <Hamburger
              toggle={setIsMobileMenuShowing}
              toggled={isMobileMenuShowing}
            />
          </div>
        </div>
      </nav>

      <MobileMenuModal
        routerItems={routerItems}
        socialItems={socialItems}
        isMobileMenuShowing={isMobileMenuShowing}
        onClose={() => {
          setIsMobileMenuShowing(false);
        }}
      />
    </>
  );
}

export default NavBar;
