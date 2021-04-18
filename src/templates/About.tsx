import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const formatTitle = title => {
  const titleArr = title.split(" ");
  if (titleArr.length > 1) {
    return titleArr.map((item, index) => {
      const titleLetters = item.split("").map((item, index) => {
        return (
          <span className="title__letter title__letter--scale" key={index}>
            {item}
          </span>
        );
      });
      return (
        <span
          className="row  animate__animated animate__rollIn animate__delay-0"
          key={index}
        >
          {titleLetters}
        </span>
      );
    });
  } else {
    const letters = titleArr.split("").map((item, index) => {
      return (
        <span className="title__letter title__letter--scale" key={index}>
          {item}
        </span>
      );
    });
    return (
      <span className="row  animate__animated animate__rollIn animate__delay-0">
        {letters}
      </span>
    );
  }
};

const About = ({ data }) => {
  const fields = data.mdx.frontmatter;
  console.log(fields.title);
  const title = formatTitle(fields.title);
  console.log(title);
  return (
    <Layout>
      <section className="about container">
        <h2 className="title title--main title--about about__title">{title}</h2>
        <div className="about__wrapper">
          <p className="text text--about about__text animate__animated animate__rollIn animate__delay-2">
            {fields.text1}
          </p>
          <br />
          <p className="text text--about about__text animate__animated animate__rollIn animate__delay-2">
            {fields.text2}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        text1
        text2
      }
    }
  }
`;

export default About;
