import React from "react";
import Playlist from "../Playlist/Playlist";

function PlaylistsPane(props) {
  return (
    <div className="PlaylistsPane">
      <span>Playlists</span>
      {props.isAuth ? (
        <div>
          <h2>
            Playlists on Spotify<sup>&copy;</sup>
          </h2>
          {props.spotifyPlaylists.map((playlist) => (
            <Playlist
              playlist={playlist}
              key={playlist.id}
              onImport={(playlistName, playlistId) =>
                props.onImport(playlistName, playlistId)
              }
            />
          ))}
          <button className="refreshBtn" onClick={() => props.onRefresh()}>
            Refresh
          </button>
        </div>
      ) : (
        <div>
          <h2>Import</h2>
          <p>
          JAM automatically imports up to 50 existing playlists. Use any playlist as a starting point for your new jam while preserving the old one. 
          </p>
        </div>
      )}
    </div>
  );
}

export default PlaylistsPane;
