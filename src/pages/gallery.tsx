import Image from "next/image";
import GalleryNFTCard from "@/components/Card/GalleryNFTCard";
import INFT from "@/schema/INFT";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { fetchNFTs } from "@/lib/fetchNFTs";

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

function Gallery({ collection }: { collection: INFT[] }) {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const [items, setItems] = useState(collection.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);

  function fetchMoreData(amountToLoad: number = 10) {
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
          <div className="sticky top-32 left-0 h-screen">
            <div className="mb-4 rounded-2xl shadow-lg shadow-slate-200/60">
              <Image
                src={`https://ipfs.io/ipfs/${collection[0].image}`}
                width={400}
                height={400}
                alt="??"
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-xl font-black uppercase">#XX01</div>
              <button
                className="flex rounded-full bg-black p-1"
                onClick={() => window.open("https://opensea.io")}
              >
                <Image
                  src="/assets/icons/opensea_white.svg"
                  width={12}
                  height={12}
                  alt="opensea"
                />
              </button>
            </div>
            <div className="grid grid-cols-2 text-xs uppercase">
              <div className="font-bold">Type </div>
              <div>Meta Human </div>
              <div className="font-bold">sex</div>
              <div>xx</div>
              <div className="font-bold">background</div>
              <div>pink</div>
            </div>
          </div>
        </div>

        <InfiniteScroll
          className="grid grid-cols-3 gap-6 overflow-auto p-4"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="col-span-3 flex justify-center bg-black text-white">
              Load More..
            </div>
          }
          endMessage={
            <div className="col-span-3 flex justify-center bg-black text-white">
              End
            </div>
          }
        >
          <div className="col-span-3 flex gap-2 text-2xs">
            {filters.map(({ title }) => (
              <button
                className={`rounded-lg p-2 ${
                  selectedFilter === title
                    ? "bg-black text-white"
                    : "bg-[#F5F5F5]"
                }`}
                key={title}
              >
                {title}
              </button>
            ))}
          </div>
          {items.map(({ id, name, image, owner }) => (
            <div key={id}>
              <GalleryNFTCard name={name} image={image} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const collection = await fetchNFTs();

  return { props: { collection } };
}

export default Gallery;
