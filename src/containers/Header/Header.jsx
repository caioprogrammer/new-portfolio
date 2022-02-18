import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header container">
      <div className="header__logo">
        Caio Nogueira
      </div>
      <div className="header__menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#works">projetos(7)</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
      <div className="header__button" id="menuOpener">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/></svg>
      </div>
    </nav>
  );
};

export default Header;
