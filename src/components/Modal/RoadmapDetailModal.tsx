import { Dialog } from "@headlessui/react";
import Image from "next/image";

type Props = {
  isShowing: boolean;
  onClose: () => void;
};
function RoadmapDetailModal({ isShowing, onClose }: Props) {
  return (
    <Dialog open={isShowing} onClose={() => {}}>
      <Dialog.Panel className="absolute top-0 left-0 bottom-0 m-16 flex animate-fade-in-fast flex-col items-center justify-center bg-[#1B1B1B] p-32">
        <div className="mb-32 text-center text-4xl font-black text-white">
          03 Merchandise
        </div>
        <button className="absolute top-0 right-0 p-10" onClick={onClose}>
          <Image
            src="/assets/icons/close.svg"
            width={24}
            height={24}
            alt="close"
          />
        </button>

        <div className="grid grid-cols-3 gap-12 text-white">
          <div>
            <div className="mb-10 text-3xl font-black">03 Merchandise</div>
            <p className="">
              We break the boundaries between the real and virtual worlds
              through the Meta-Human Universe. We have the ultimate vision of
              &apos;to create the world&apos;s most hip and free
              atmosphere&apos; and create innovation that has never{" "}
            </p>
          </div>
          <div>
            <div className="mb-10 text-3xl font-black">03 Merchandise</div>
            <p className="">
              We break the boundaries between the real and virtual worlds
              through the Meta-Human Universe. We have the ultimate vision of
              &apos;to create the world&apos;s most hip and free
              atmosphere&apos; and create innovation that has never{" "}
            </p>
          </div>
          <div>
            <div className="mb-10 text-3xl font-black">03 Merchandise</div>
            <p className="">
              We break the boundaries between the real and virtual worlds
              through the Meta-Human Universe. We have the ultimate vision of
              &apos;to create the world&apos;s most hip and free
              atmosphere&apos; and create innovation that has never{" "}
            </p>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default RoadmapDetailModal;
