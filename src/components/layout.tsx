import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/main.scss";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
