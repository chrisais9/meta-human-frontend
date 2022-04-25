import { IState } from "@/store/modules";
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
      <div className="mx-auto flex h-full items-center justify-between">
        <div className="flex cursor-pointer font-mono text-2xl font-bold uppercase">
          <Link href="/">META HUMAN</Link>
        </div>
        <div className="hidden items-center lg:flex" id="mobile-menu">
          <ul className="flex space-x-6 uppercase">
            {routerItems.map(({ href, title }) => (
              <li
                key={title}
                className={`rounded-xl p-2 text-2xs ${
                  router.pathname == href
                    ? "bg-black text-header-btn-background"
                    : "text-black"
                }`}
              >
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="pr-3 text-2xs">LAN</div>
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
