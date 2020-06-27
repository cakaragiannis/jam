import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="logo">
        <h1>JAM.</h1>
        <p>
          for <span>Spotify</span><sup>&copy;</sup>
        </p>
      </div>
      </header>
    );
  }
}

export default Header;
