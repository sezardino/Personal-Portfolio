import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

const Header = () => {
  return (
    <header className="header container">
      <button className="button button--hamburger header__button"></button>
      <a href="?home" className="logo">
        <StaticImage
          src="../images/logo.svg"
          placeholder="blurred"
          alt="logo"
          className="header__logo logo"
        />
      </a>
      <div className="menu header__menu">
        <button className="button button--close menu__button"></button>
        <nav className="nav nav--header menu__nav header__nav">
          <Link to="/" className="nav__link">
            Home
          </Link>
          <Link to="/about" className="nav__link">
            About
          </Link>
          <Link to="/skills" className="nav__link">
            Skills
          </Link>
          <Link to="/works" className="nav__link">
            Works
          </Link>
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
