import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header container">
      <div className="header__logo">
        LOGO
      </div>
      <div className="header__menu">
        <ul>
          <li><a href="#/">GO</a></li>
          <li><a href="#/">PROJECTS(14)</a></li>
          <li><a href="#/">CONTACT</a></li>
        </ul>
      </div>
      <div className="header__button" id="menuOpener">
        open
      </div>
    </nav>
  );
};

export default Header;
