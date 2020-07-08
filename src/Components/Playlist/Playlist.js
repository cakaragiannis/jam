import React from "react";
import "../Track/Track.css";
import "./Playlist.css";

function Playlist(props) {
  return (
    <div className="Playlist">
      <img
        className="cover"
        alt={props.playlist.name}
        src={props.playlist.coverImg}
      />
      <table>
        <tbody>
          <tr>
            <th>{props.playlist.name}</th>
          </tr>
          <tr>
            <td>
              {props.playlist.tracks.total > 1
                ? `${props.playlist.tracks.total} tracks`
                : `${props.playlist.tracks.total} track`}
            </td>
          </tr>
          <tr>
            <td>
              {props.public === false ? "Private playlist" : "Public playlist"}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => props.onImport(props.playlist.name, props.playlist.id)}
      >
        &#9776;
      </button>
    </div>
  );
}

export default Playlist;
