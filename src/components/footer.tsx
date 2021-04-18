import * as React from "react";

const Footer = () => {
  return (
    <footer className="footer container">
      <a
        href="#contact"
        className="button button-arrow button-arrow--prev footer__prev"
      >
        <span className="hidden">Prev page</span>
      </a>
      <nav className="nav nav--footer footer__nav">
        <div className="nav__link">
          <span className="hidden">home</span>
        </div>
        <div className="nav__link">
          <span className="hidden">about</span>
        </div>
        <div className="nav__link">
          <span className="hidden">skills</span>
        </div>
        <div className="nav__link">
          <span className="hidden">works</span>
        </div>
        <div className="nav__link">
          <span className="hidden">contact</span>
        </div>
      </nav>
      <a
        href="#about"
        className="button button-arrow button-arrow--next footer__next"
      >
        <span className="hidden">Next page</span>
      </a>
    </footer>
  );
};

export default Footer;
