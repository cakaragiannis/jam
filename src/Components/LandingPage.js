import React from "react";

function LandingPage(props) {
  return (
    <div className="LandingPage">
      <div className="logo">
        <h1>JAM.</h1>
        <p>
          for <span>Spotify</span><sup>&copy;</sup>
        </p>
      </div>

      <div className="hero">
        <ul>
          <li>SLOW</li>
          <li>OFFICE</li>
          <li>YOUR</li>
          <li>STUDY</li>
          <li>RUN</li>
        </ul>
        <h2>JAM.</h2>
      </div>

      <div className="link-prompt">
        <p>
          Meet the easiest way to create and manage Spotify
          <sup>&copy;</sup> playlists.
        </p>
        <button>LINK SPOTIFY</button>
      </div>
    </div>
  );
}

export default LandingPage;
