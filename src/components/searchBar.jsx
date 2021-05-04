import React, { useState } from "react";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="mt-5 mb-5 w-75">
      <form className="form-inline my-2 my-lg-0 w-100 d-flex justify-content-center">
        <input
          className="form-control mr-sm-2 w-75"
          onChange={handleChange}
          type="search"
          placeholder="Search in recipes"
          aria-label="Search"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-danger my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(searchInput);
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
  }
}

export default SearchBar;
