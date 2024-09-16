// import React from 'react'
import searchIcon from "../../assets/icons/icons8-search-100.png";

function Search() {
  return (
    <div className="flex justify-center items-center gap-2 border-b">
      <img src={searchIcon} alt="" className="h-7 w-7" />
      <input
        type="text"
        placeholder="Search"
        className="w-[15rem] h-10  bg-transparent outline-none"
      />
    </div>
  );
}

export default Search;
