import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const About = ({data}) => {
  const fields = data.mdx.frontmatter;
  console.log(fields.title);
  const title = fields.title.split(' ').map((item, index) => {
    return <span className="title__letter title__letter--scale" key={index}>{item}</span>
  })
  console.log(title);
  return (
    <Layout>
      <section className="about container">
        <h2 className="title title--main title--about about__title">
          {title}
          <span className="row  animate__animated animate__rollIn animate__delay-0">
            <span className="title__letter title__letter--scale">a</span>
            <span className="title__letter title__letter--scale">b</span>
            <span className="title__letter title__letter--scale">o</span>
            <span className="title__letter title__letter--scale">u</span>
            <span className="title__letter title__letter--scale">t</span>
          </span>
          <span className="row  animate__animated animate__rollIn animate__delay-1">
            {" "}
            <span className="title__letter title__letter--scale">m</span>
            <span className="title__letter title__letter--scale">e</span>
          </span>
        </h2>
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
  mdx(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      text1
      text2
    }
  }
}
`

export default About;
