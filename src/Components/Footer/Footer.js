import React from "react";
import './Footer.css';

function Footer(props) {
  return (
    <footer>
      {
        props.isAuth ? 
        <p>Digging JAM.? <a href="https://github.com/cakaragiannis/jam">Check out the source code.</a></p> :
        <p>Connect Spotify<sup>&copy;</sup> to get started.</p>
      }
    </footer>
  )
}

export default Footer;