import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Track from "../Track/Track";

function SearchPane(props) {
  return (
    <div>
      <span>Search</span>
      {props.isAuth ? (
        <div>
          <SearchBar onTermChange={(term) => props.onTermChange(term)} />
          {props.searchResults.map((track) => (
            <Track
              track={track}
              key={track.id}
              onAdd={(track) => props.onAdd(track)}
            />
          ))}
        </div>
      ) : (
        <div>
          <h2>Search</h2>
          <p>
            Find new and existing favourites with access to Spotify
            <sup>&copy;</sup>'s entire collection of over 50 million songs,
            albums and podcasts.
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchPane;
