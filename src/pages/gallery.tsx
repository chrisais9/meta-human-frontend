import NFTSimpleCard from "@/components/Card/NFTSimpleCard";
import INFT from "@/schema/INFT";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState } from "react";
import NFTDetailCard from "@/components/Card/NFTDetailCard";
import GalleryFilter from "@/components/GalleryFilter";

type Props = {
  collection: INFT[];
};

function Gallery({ collection }: Props) {
  const [selectedNFT, setSelectedNFT] = useState(collection[0]);

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
    <div className="mx-16 mt-32">
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
          <div className="col-span-3 flex items-center justify-between">
            <GalleryFilter />
            <div className="text-xs">{collection.length}</div>
          </div>
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
  for (let i = 1; i <= 1000; i++) {
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
