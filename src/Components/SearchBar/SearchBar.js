import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input
        placeholder="Search track, artist or album..."
        onChange={event => props.onTermChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
