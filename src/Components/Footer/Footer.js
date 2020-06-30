import React from "react";
import './Footer.css';

function Footer(props) {
  return (
    <footer>
      {
        props.isAuth ? 
        <p>Digging JAM.? <a href="#">Check out the source code here.</a></p> :
        <p>Connect your Spotify<sup>&copy;</sup> account to get started.</p>
      }
    </footer>
  )
}

export default Footer;