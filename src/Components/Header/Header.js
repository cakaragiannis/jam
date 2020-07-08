import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="container">
      <header>
        <h1>JAM.</h1>
        <p>
          for <span>Spotify</span>
          <sup>&copy;</sup>
        </p>
        <p className="hidden">
          Easy playlist creation for the world's favourite streaming service.
        </p>
        {props.isAuth ? "" : <button onClick={props.connect}>CONNECT</button>}
      </header>
    </div>
  );
}

export default Header;
