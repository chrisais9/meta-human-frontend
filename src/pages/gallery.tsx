import INFT from "@/schema/INFT";
import React, { useEffect, useState } from "react";
import NFTDetailCard from "@/components/Card/NFTDetailCard";
import { IState } from "@/store/modules";
import { useSelector } from "react-redux";
import GalleryInfiniteGrid from "@/components/GalleryGrid";
import { fetchDummyNFTs } from "@/lib/fetchNFTs";

type Props = {
  collection: INFT[];
};

function Gallery({ collection }: Props) {
  const [selectedNFT, setSelectedNFT] = useState(collection[0]);

  const selectedFilters = useSelector((state: IState) => state.filter.filters);
  const [filteredCollection, setFilteredCollection] = useState(collection);

  useEffect(() => {
    const flattenedSelectedFilter = Object.values(selectedFilters).flat();
    const isFilterEmpty = flattenedSelectedFilter.length === 0;

    function filterCollection(collection: INFT[]) {
      let col: INFT[] = [];
      collection.forEach((origin) => {
        let ck = true;
        origin.attributes.forEach((originAttribute) => {
          if (selectedFilters[originAttribute.trait_type]) {
            let selectedItemFromFilter =
              selectedFilters[originAttribute.trait_type];
            if (
              selectedItemFromFilter.length !== 0 &&
              !selectedItemFromFilter.includes(originAttribute.value)
            ) {
              ck = false;
              return;
            }
          }
        });
        if (ck) {
          col.push(origin);
        }
      });
      return col;
    }

    const filterdCollection = isFilterEmpty
      ? collection
      : filterCollection(collection);

    setFilteredCollection(filterdCollection);
  }, [collection, selectedFilters]);

  return (
    <div className="mt-32 lg:px-14">
      <div className="flex justify-center">
        <div className="sticky top-40 left-0 hidden h-screen w-full justify-center lg:flex">
          <NFTDetailCard nft={selectedNFT} />
        </div>
        <div className="flex w-full flex-col justify-center">
          <div className="flex items-center justify-between px-3 pb-6 ">
            <div className="text-4xl font-black">Gallery</div>
            <div className="hidden text-xs lg:inline">
              {filteredCollection.length}
            </div>
          </div>
          <GalleryInfiniteGrid
            items={filteredCollection}
            onClickItem={(item) => setSelectedNFT(item)}
            amountToLoad={10}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const collection = fetchDummyNFTs();

  return { props: { collection } };
}

export default Gallery;
