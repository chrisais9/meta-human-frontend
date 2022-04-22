import Image from "next/image";
import GalleryNFTCard from "@/components/Card/GalleryNFTCard";
import INFT from "@/schema/INFT";
import { fetchNFTs } from "./api/collection";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

function Gallery({ collection }: { collection: INFT[] }) {
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
        <div className="sticky top-32 h-screen">
          <Image
            className=""
            src={`https://ipfs.io/ipfs/${collection[0]?.image}`}
            width={400}
            height={400}
            alt="??"
          />
          <div className="mb-4 text-xl font-black uppercase">#XX01</div>
          <div className="grid grid-cols-2 text-xs uppercase">
            <div className="font-bold">Type </div>
            <div>Meta Human </div>
            <div className="font-bold">sex</div>
            <div>xx</div>
            <div className="font-bold">background</div>
            <div>pink</div>
          </div>
        </div>

        <InfiniteScroll
          className="grid grid-cols-3 gap-4 overflow-auto p-10"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="col-span-3 block flex justify-center bg-black text-white">
              Load More..
            </div>
          }
          endMessage={
            <div className="col-span-3 block flex justify-center bg-black text-white">
              End
            </div>
          }
        >
          {items.map(({ id, name, image, owner }) => (
            <div key={id}>
              <GalleryNFTCard image={image} />
              <h1>{id}</h1>
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
