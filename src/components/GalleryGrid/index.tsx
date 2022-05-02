import INFT from "@/schema/INFT";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NFTSimpleCard from "../Card/NFTSimpleCard";
import GalleryFilter from "../GalleryFilter";

type Props = {
  items: INFT[];
  onClickItem: (item: INFT) => void;
  amountToLoad: number;
};

function GalleryInfiniteGrid({ items, onClickItem, amountToLoad }: Props) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  useEffect(() => {
    setRenderedItems(items.slice(0, amountToLoad));
  }, [items, amountToLoad]);

  const [renderedItems, setRenderedItems] = useState([] as INFT[]);
  const [hasMore, setHasMore] = useState(true);

  function renderMoreData() {
    if (renderedItems.length >= items.length) {
      setHasMore(false);
      return;
    }

    const start = renderedItems.length;
    const end = Math.min(items.length, renderedItems.length + amountToLoad);

    setRenderedItems(renderedItems.concat(items.slice(start, end)));
  }

  return (
    <InfiniteScroll
      className="grid grid-cols-2 gap-6 overflow-auto p-4 lg:grid-cols-3"
      dataLength={renderedItems.length}
      next={renderMoreData}
      hasMore={hasMore}
      loader={
        <div className="col-span-2 flex justify-center rounded-full bg-black text-white lg:col-span-3">
          Load More..
        </div>
      }
    >
      {renderedItems.length === 0 ? (
        <div className="col-span-full flex min-h-[calc(100vh)] min-w-[670px] flex-col items-center justify-center">
          No Meta Humans matched your filter parameters
        </div>
      ) : (
        renderedItems.map((nft) => (
          <div
            key={nft.id}
            onClick={() => {
              onClickItem(nft);
              setSelectedItem(nft);
            }}
          >
            <NFTSimpleCard
              id={nft.id}
              name={nft.name}
              image={nft.image}
              color={nft.color}
              selected={selectedItem === nft}
            />
          </div>
        ))
      )}
    </InfiniteScroll>
  );
}

export default GalleryInfiniteGrid;
