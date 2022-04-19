import Link from "next/link";
import { useRouter } from "next/router";

const routerItems = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/mint",
    title: "Buy(Mint)",
  },
  {
    href: "/gallery",
    title: "Gallery",
  },
  {
    href: "/team",
    title: "Team",
  },
];

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="fixed top-0 z-50 w-full px-5 pt-5 lg:px-8 lg:pt-8">
      <div className="max-w-11xl mx-auto flex h-full items-center justify-center border-b border-white border-opacity-0">
        <Link href="/">
          <span className="flex-grow text-2xl font-bold">META-HUMAN</span>
        </Link>
        <div className="hidden items-center lg:flex" id="mobile-menu">
          <ul className="flex space-x-2">
            {routerItems.map(({ href, title }) => (
              <li key={title}>
                <Link href={href}>
                  <a className="text-2xs font-500 h-7 items-center rounded bg-white bg-opacity-20 py-1 px-4 font-mono uppercase tracking-wider text-black opacity-80 duration-200 hover:bg-opacity-70 ">
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
