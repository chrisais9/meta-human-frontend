import NFTSimpleCard from "@/components/Card/NFTSimpleCard";
import INFT from "@/schema/INFT";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import NFTDetailCard from "@/components/Card/NFTDetailCard";
import GalleryFilter from "@/components/GalleryFilter";
import { IState } from "@/store/modules";
import { useSelector } from "react-redux";

type Props = {
  collection: INFT[];
};

function Gallery({ collection }: Props) {
  const [selectedNFT, setSelectedNFT] = useState(collection[0]);

  const selectedFilters = useSelector((state: IState) => state.filter.filters);
  const [filteredCollection, setFilteredCollection] = useState(
    collection.slice(0, 10)
  );

  const [renderedItems, setRenderedItems] = useState(
    filteredCollection.slice(0, 10)
  );
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const isFilterEmpty = Object.values(selectedFilters).flat().length === 0;

    const filterdCollection = isFilterEmpty
      ? collection
      : collection.filter(
          (nft) =>
            selectedFilters["Background"] &&
            selectedFilters["Background"].includes(nft.attributes[0].value)
        );
    setFilteredCollection(filterdCollection);
    console.log(filterdCollection);
    setRenderedItems(filterdCollection.slice(0, 10));
  }, [collection, selectedFilters]);

  function renderMoreData(amountToLoad: number = 10) {
    if (renderedItems.length >= filteredCollection.length) {
      setHasMore(false);
      return;
    }

    const start = renderedItems.length;
    const end =
      renderedItems.length + amountToLoad > filteredCollection.length
        ? filteredCollection.length
        : renderedItems.length + amountToLoad;

    setRenderedItems(
      renderedItems.concat(filteredCollection.slice(start, end))
    );
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
          dataLength={renderedItems.length}
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
          <div className="renderedItems-center col-span-3 flex justify-between">
            <GalleryFilter />
            <div className="text-xs">{filteredCollection.length}</div>
          </div>
          {renderedItems.map((nft) => (
            <div key={nft.id} onClick={() => setSelectedNFT(nft)}>
              <NFTSimpleCard
                id={nft.id}
                name={nft.name}
                image={nft.image}
                color={nft.color}
                selected={selectedNFT === nft}
              />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

const backgroundColor = [
  "#8BCDE8",
  "#EB6FCC",
  "#637C6D",
  "#BFB344",
  "#57D181",
  "#FF6942",
  "#FF964A",
  "#1E4CC1",
  "#3E237D",
];

const background = [
  "Sky Blue",
  "Pink",
  "Olive Green",
  "Mustard",
  "Light Green",
  "Dark Orange",
  "Orange",
  "Blue",
  "Purple",
];

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
          color: backgroundColor[(i - 1) % backgroundColor.length],
          attributes: [
            {
              trait_type: "Background",
              value: background[(i - 1) % background.length],
            },
          ],
        },
      ];
    } catch (e) {
      console.error("Something went wrong", e);
    }
  }

  return { props: { collection } };
}

export default Gallery;
