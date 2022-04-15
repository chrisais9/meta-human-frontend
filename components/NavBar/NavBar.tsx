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
    <nav className="fixed w-full top-0 lg:px-8 px-5 lg:pt-8 pt-5 z-50">
      <div className="flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0">
        <Link href="/">
          <span className="flex-grow font-bold text-2xl">META-HUMAN</span>
        </Link>
        <div className="items-center hidden lg:flex" id="mobile-menu">
          <ul className="flex space-x-2">
            {routerItems.map(({ href, title }) => (
              <li key={title}>
                <Link href={href}>
                  <a
                    className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
                      router.asPath === href && "bg-fuchsia-600 text-white"
                    }`}
                  >
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
