import INFT from "@/schema/INFT";
import React, { useEffect, useState } from "react";
import NFTDetailCard from "@/components/Card/NFTDetailCard";
import { IState } from "@/store/modules";
import { useSelector } from "react-redux";
import GalleryInfiniteGrid from "@/components/GalleryGrid";
import { fetchDummyNFTs } from "@/lib/fetchNFTs";
import GalleryFilter from "@/components/GalleryFilter";
import Image from "next/image";

type Props = {
  collection: INFT[];
};

function Gallery({ collection }: Props) {
  const [filteredCollection, setFilteredCollection] = useState(collection);
  const selectedFilters = useSelector((state: IState) => state.filter.filters);

  const [selectedNFT, setSelectedNFT] = useState(collection[0]);

  const [isMyNFTMode, setIsMyNFTMode] = useState(false);

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

  function handleShuffle() {
    const shuffledCollection = shuffle(filteredCollection).slice();
    setFilteredCollection(shuffledCollection);
  }

  function handleToggleMyNFTMode() {
    setIsMyNFTMode(!isMyNFTMode);
  }

  function shuffle(collection: INFT[]): INFT[] {
    let currentIndex = collection.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [collection[currentIndex], collection[randomIndex]] = [
        collection[randomIndex],
        collection[currentIndex],
      ];
    }

    return collection;
  }

  return (
    <div className="mt-32 lg:px-14">
      <div className="flex justify-center">
        <div className="sticky top-40 left-0 hidden h-screen w-full justify-center lg:flex">
          <NFTDetailCard nft={selectedNFT} />
        </div>
        <div className="flex w-full flex-col justify-center">
          <div className="flex items-center justify-between pb-6 pl-3 lg:pl-0">
            <div className="text-4xl font-black">Gallery</div>
            <div className="hidden text-xs lg:inline">
              {filteredCollection.length}
            </div>
          </div>
          <div className="flex justify-between pb-8 pl-3 lg:pl-0">
            <GalleryFilter />
            <div className="flex gap-2">
              <button
                className="flex rounded-full bg-[#F5F5F5] p-2"
                onClick={handleShuffle}
              >
                <Image
                  src="/assets/icons/shuffle.svg"
                  width={12}
                  height={12}
                  alt="opensea"
                />
              </button>
              <button
                className={`flex rounded-full p-2 ${
                  isMyNFTMode ? "bg-black" : "bg-[#F5F5F5]"
                }`}
                onClick={handleToggleMyNFTMode}
              >
                {isMyNFTMode ? (
                  <Image
                    src="/assets/icons/person_white.svg"
                    width={12}
                    height={12}
                    alt="opensea"
                  />
                ) : (
                  <Image
                    src="/assets/icons/person.svg"
                    width={12}
                    height={12}
                    alt="opensea"
                  />
                )}
              </button>
            </div>
          </div>
          <GalleryInfiniteGrid
            items={isMyNFTMode ? [] : filteredCollection}
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
