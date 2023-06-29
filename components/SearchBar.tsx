"use client";
import React, { FormEvent, useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer search={search} setSearch={setSearch} />
      </div>
    </form>
  );
};

export default SearchBar;
