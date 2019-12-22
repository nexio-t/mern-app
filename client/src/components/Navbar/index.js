import React from "react";
import "bulma/css/bulma.css";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home <span className="sr-only"></span>
          </a>
          <a className="navbar-item" href="/saved">
            Saved Videos
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
