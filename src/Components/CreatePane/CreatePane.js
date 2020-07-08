import React from "react";
import Track from "../Track/Track";

function CreatePane(props) {
  return (
    <div>
      <span>Create</span>
      {props.isAuth ? (
        <div>
          <input
            placeholder="New JAM..."
            onChange={(event) => props.onNameChange(event.target.value)}
          />
          <div>
            {props.playlistTracks.map((track) => (
              <Track
                track={track}
                key={track.id}
                isRemoval={true}
                onRemove={(track) => props.onRemove(track)}
              />
            ))}
          </div>
          {props.playlistTracks.length > 0 ? (
            <button className="saveBtn" onClick={props.onSave}>
              Save to Spotify
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div>
          <h2>Create & Export</h2>
          <p>
            Craft the perfect soundtrack for any situation, on any device, anywhere. When you're done, export your masterpiece with just one click.
          </p>
        </div>
      )}
    </div>
  );
}

export default CreatePane;
