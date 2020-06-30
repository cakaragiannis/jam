import React from "react";
import './Header.css';

function Header(props) {
  return (
    <div className="container">
      <header>
          <h1>JAM.</h1>
          <p>for <span>Spotify</span><sup>&copy;</sup></p>
          {
            props.isAuth ? 
            <p>JAM playlists are saved to your Spotify<sup>&copy;</sup> account.</p> : 
            <p>The easiest way to create and manage Spotify<sup>&copy;</sup> playlists.</p>
          }
          {
            props.isAuth ? 
            <button className="isAuth">CONNECTED</button> : 
            <button onClick={props.connect}>CONNECT</button>
          }
          
      </header>
    </div>
  )
}

export default Header;
