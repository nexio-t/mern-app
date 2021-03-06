import React from "react";
import "bulma/css/bulma.css";

function Navbar() {
  return (
    <html class="has-navbar-fixed-top">
    <nav className="navbar is-fixed-top is-warning" role="navigation" aria-label="main navigation">

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
    </html>
  );
}

export default Navbar;
