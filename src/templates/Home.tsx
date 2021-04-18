import * as React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Home = ({ data }) => {
  const fileds = data.mdx.frontmatter;
  return (
    <Layout>
      <section className="hero container animate__animated ">
        <p className="hero__img animate__animated animate__fadeInBottomRight">
          <StaticImage src="../images/hero.png" placeholder="none" alt="logo" />
        </p>
        <div className="hero__wrapper undefined">
          <h2 className="title title--hero hero__title">
            <span className="title title--name hero__title--name animate__delay-12 animate__animated animate__fadeInBottomLeft">
              {fileds.name}
            </span>
            <span className="title title--surname hero__title--surname animate__animated animate__delay-13 animate__animated animate__fadeInBottomLeft">
            {fileds.surname}
            </span>
          </h2>
          <p className="text text--hero hero__text animate__animated animate__delay-14 animate__animated animate__fadeInBottomLeft">
            {fileds.subtitle}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        surname
        subtitle
        name
      }
    }
  }
`;

export default Home;
