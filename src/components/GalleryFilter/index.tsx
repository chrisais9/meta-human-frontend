import { IState } from "@/store/modules";
import { addFilter, removeFilter, resetFilter } from "@/store/modules/filter";
import { Popover, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterItemRow from "./FilterItemRow";

const filters = [
  {
    label: "Background",
    items: [
      "Sky Blue",
      "Pink",
      "Olive Green",
      "Mustard",
      "Light Green",
      "Dark Orange",
      "Orange",
      "Blue",
      "Purple",
    ],
  },
  {
    label: "Clothes",
    items: ["Hood", "T-shirt", "One-piece"],
  },
  {
    label: "Ear",
    items: [],
  },
  {
    label: "Eyes",
    items: [],
  },
  {
    label: "Mouth",
    items: [],
  },
  {
    label: "Head",
    items: [],
  },
];

function GalleryFilter() {
  const selectedFilters = useSelector((state: IState) => state.filter.filters);
  const isFilterEmpty =
    Object.values(selectedFilters).flatMap((value) => value).length === 0;
  const dispatch = useDispatch();

  function handleItemSelect(isSelected: boolean, filter: string, item: string) {
    if (isSelected) {
      dispatch(removeFilter({ filter: filter, item: item }));
    } else {
      dispatch(addFilter({ filter: filter, item: item }));
    }
  }

  function handleItemReset() {
    dispatch(resetFilter());
  }

  return (
    <Popover.Group className="flex gap-2 overflow-x-auto text-2xs no-scrollbar">
      <button
        className={`rounded-full p-3 py-2 ${
          isFilterEmpty ? "bg-black text-white" : "bg-[#F5F5F5]"
        }`}
        onClick={() => handleItemReset()}
      >
        All
      </button>
      {filters.map(({ label, items }) => {
        const isItemEmpty = items.length === 0;
        const activeFilters = Object.keys(selectedFilters) as string[];
        return (
          <Popover key={label}>
            <Popover.Button
              className={`flex items-center rounded-full p-3 py-2 focus:outline-none ${
                activeFilters.find(
                  (key) => key === label && selectedFilters[key].length !== 0
                )
                  ? "bg-black text-white"
                  : "bg-[#F5F5F5]"
              }`}
            >
              {label}
              {selectedFilters[label] && selectedFilters[label].length !== 0 ? (
                <div className="ml-1 inline">
                  {selectedFilters[label].length}
                </div>
              ) : (
                <PlusIcon className="ml-1 inline h-3 w-3" />
              )}
            </Popover.Button>
            {isItemEmpty ? null : (
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="fixed z-10 mt-3 grid w-32 grid-cols-1 gap-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="text-xs font-medium">{label}</div>
                  {items.map((item) => {
                    const isItemSelected = !!(
                      selectedFilters[label] &&
                      selectedFilters[label].find((value) => value === item)
                    );
                    return (
                      <FilterItemRow
                        key={item}
                        label={item}
                        isSelected={isItemSelected}
                        onSelect={() => {
                          handleItemSelect(isItemSelected, label, item);
                        }}
                      />
                    );
                  })}
                </Popover.Panel>
              </Transition>
            )}
          </Popover>
        );
      })}
    </Popover.Group>
  );
}

export default GalleryFilter;
