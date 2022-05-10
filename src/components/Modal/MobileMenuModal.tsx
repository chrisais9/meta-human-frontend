import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";

type Props = {
  routerItems: { href: string; title: string }[];
  socialItems: { href: string; title: string }[];
  isMobileMenuShowing: boolean;
  onClose: () => void;
};

function MobileMenuModal({
  routerItems,
  socialItems,
  isMobileMenuShowing,
  onClose,
}: Props) {
  const router = useRouter();
  function handleMobileRouting(href: string) {
    onClose();
    router.push(href);
  }
  return (
    <Dialog open={isMobileMenuShowing} onClose={() => {}}>
      <Dialog.Panel className="absolute top-[5rem] left-0 flex h-screen w-screen animate-fade-in-fast items-center justify-center backdrop-blur-md">
        <ul className="flex cursor-pointer flex-col gap-6 text-center uppercase">
          {routerItems.map(({ href, title }) => (
            <li
              key={title}
              className={
                router.pathname === href ? "btn-router-active" : "btn-router"
              }
              onClick={() => handleMobileRouting(href)}
            >
              {title}
            </li>
          ))}
          {socialItems.map(({ href, title }) => (
            <li
              key={title}
              className={
                router.pathname === href ? "btn-router-active" : "btn-router"
              }
            >
              <a href={href} target="_blank" rel="noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </Dialog.Panel>
    </Dialog>
  );
}

export default MobileMenuModal;
