import { IState } from "@/store/modules";
import { addFilter } from "@/store/modules/filter";
import { Popover, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FilterItemRow from "./FilterItemRow";

const filters = [
  {
    label: "ALL",
    items: [],
  },
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
    label: "Ear",
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
    label: "Eyes",
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
    label: "Mouth",
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
    label: "Head",
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
];

function GalleryFilter() {
  const selectedFilters = useSelector((state: IState) => state.filter.filters);
  const dispatch = useDispatch();

  function handleItemSelect(filter: string, item: string) {
    dispatch(addFilter({ filter: filter, item: item }));
  }

  return (
    <Popover.Group as="div" className="col-span-3 flex gap-2 text-2xs">
      {filters.map(({ label, items }) => {
        const isItemEmpty = items.length === 0;
        const activeFilters = Object.keys(selectedFilters) as string[];
        return (
          <Popover className="relative" key={label}>
            <Popover.Button
              className={`rounded-full p-3 py-2 ${
                activeFilters.find((key) => key === label)
                  ? "bg-black text-white"
                  : "bg-[#F5F5F5]"
              }`}
            >
              {label}
              {isItemEmpty ? null : (
                <PlusIcon
                  className="ml-1 inline h-3 w-3 text-black"
                  aria-hidden="true"
                />
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
                <Popover.Panel className="absolute z-10 mt-3 w-32 transform">
                  <div className="grid grid-cols-1 gap-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="text-xs font-medium">{label}</div>
                    {items.map((value) => {
                      const isItemSelected = selectedFilters[label] === value;
                      return (
                        <FilterItemRow
                          key={value}
                          label={value}
                          isSelected={isItemSelected}
                          onSelect={() => {
                            handleItemSelect(label, value);
                          }}
                        />
                      );
                    })}
                  </div>
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
