import React from "react";
import "./Track.css";

function Track(props) {
  return (
    <div className="Track">
      <img
        className="cover"
        alt={props.track.album}
        src={props.track.albumArt}
      />
      <table>
        <tbody>
          <tr>
            <th>{props.track.name}</th>
          </tr>
          <tr>
            <td>{props.track.album}</td>
          </tr>
          <tr>
            <td>{props.track.artist}</td>
          </tr>
          <tr>
            <td>
              {props.track.release.slice(0, 4)}
              {props.track.explicit ? <span>EXPLICIT</span> : ""}
              {props.track.popularity > 70 ? <span>POPULAR</span> : ""}
            </td>
          </tr>
        </tbody>
      </table>
      {props.isRemoval ? (
        <button onClick={() => props.onRemove(props.track)}>
          &times;
        </button>
      ) : (
        <button onClick={() => props.onAdd(props.track)}>&#43;</button>
      )}
    </div>
  );
}

export default Track;
