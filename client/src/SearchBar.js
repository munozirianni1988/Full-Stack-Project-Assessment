import React, { useState } from "react";

function SearchBar(props) {
  const [inputValue, setInputValue] = useState([]);

  function handleSearch(e) {
    setInputValue(e.target.value);
    props.search(e.target.value);
  }

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          value={inputValue}
          onChange={handleSearch}
          placeholder="Search a video..."
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
