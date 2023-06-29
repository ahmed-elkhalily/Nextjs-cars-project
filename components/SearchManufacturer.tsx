"use client";

import { useState } from "react";
import { searchProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({ search, setSearch }: searchProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              className="ml-4"
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car Logo"
            />
            <Combobox.Input
              className="search-manufacturer"
              displayValue={(search: string) => search}
              placeholder="Volkswagen"
            />
          </Combobox.Button>
          <Transition>
            {filteredManufacturers.map((item) => (
              <Combobox.Option
                key={item}
                value={query}
                className="search-manufacturer__option"
              >
                {item}
              </Combobox.Option>
            ))}
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
