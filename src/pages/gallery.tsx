import Image from "next/image";
import NFTSimpleCard from "@/components/Card/NFTSimpleCard";
import INFT from "@/schema/INFT";
import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/solid";
import NFTDetailCard from "@/components/Card/NFTDetailCard";

type Props = {
  collection: INFT[];
};

const filters = [
  {
    title: "ALL",
  },
  {
    title: "Background",
  },
  {
    title: "Clothes",
  },
  {
    title: "Ear",
  },
  {
    title: "Eyes",
  },
  {
    title: "Mouth",
  },
  {
    title: "Head",
  },
];

function Gallery({ collection }: Props) {
  const [selectedNFT, setSelectedNFT] = useState(collection[0]);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const [items, setItems] = useState(collection.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);

  function renderMoreData(amountToLoad: number = 10) {
    if (items.length >= collection.length) {
      setHasMore(false);
      return;
    }

    const start = items.length;
    const end =
      items.length + amountToLoad > collection.length
        ? collection.length
        : items.length + amountToLoad;

    setItems(items.concat(collection.slice(start, end)));
  }

  return (
    <div className="container mx-auto mt-32">
      <div className="flex justify-between">
        <div className="flex w-1/2 justify-center">
          <div className="sticky top-40 left-0 h-screen">
            <NFTDetailCard nft={selectedNFT} />
          </div>
        </div>

        <InfiniteScroll
          className="grid grid-cols-3 gap-6 overflow-auto p-4"
          dataLength={items.length}
          next={renderMoreData}
          hasMore={hasMore}
          loader={
            <div className="col-span-3 flex justify-center rounded-full bg-black text-white">
              Load More..
            </div>
          }
          endMessage={
            <div className="col-span-3 flex justify-center rounded-full bg-black text-white">
              End
            </div>
          }
        >
          <Popover.Group as="div" className="col-span-3 flex gap-2 text-2xs">
            {filters.map(({ title }) => (
              <Popover className="relative" key={title}>
                <Popover.Button
                  className={`rounded-lg p-2 ${
                    selectedFilter === title
                      ? "bg-black text-white"
                      : "bg-[#F5F5F5]"
                  }`}
                >
                  {title}
                  <PlusIcon
                    className="ml-1 inline h-3 w-3 text-black"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-3 w-28 transform">
                    <div className="grid grid-cols-1 gap-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="text-xs font-medium">{title}</div>
                      <div className="flex items-center">
                        <label className="h-full w-full cursor-pointer">
                          Red
                        </label>
                        <input
                          name="Type[]"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          value="Human"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="h-full w-full cursor-pointer">
                          Blue
                        </label>
                        <input
                          name="Type[]"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          value="Human"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="h-full w-full cursor-pointer">
                          Black
                        </label>
                        <input
                          name="Type[]"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          value="Human"
                        />
                      </div>
                      <div className="flex items-center">
                        <label className="h-full w-full cursor-pointer">
                          Green
                        </label>
                        <input
                          name="Type[]"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          value="Human"
                        />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            ))}
          </Popover.Group>
          {items.map((nft) => (
            <div key={nft.id} onClick={() => setSelectedNFT(nft)}>
              <NFTSimpleCard
                id={nft.id}
                name={nft.name}
                image={nft.image}
                selected={selectedNFT === nft}
              />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let collection: INFT[] = [];
  for (let i = 1; i <= 10000; i++) {
    try {
      collection = [
        ...collection,
        {
          id: i,
          name: `#XX${String(i).padStart(5, "0")}`,
          image: `https://ipfs.io/ipfs/Qme42XjH7tBpvqyCqQFoa6UmbXehnRbwk5NDVATCSVQvf3`,
        },
      ];
    } catch (e) {
      console.error("Something went wrong", e);
    }
  }

  return { props: { collection } };
}

export default Gallery;
