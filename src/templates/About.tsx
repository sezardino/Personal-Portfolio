import * as React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <section className="about container">
        <h2 className="title title--main title--about about__title">
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
            I am a junior front-end developer. I create websites and
            web-applications using modern technologies based on modern
            web-standards.
          </p>
          <br />
          <p className="text text--about about__text animate__animated animate__rollIn animate__delay-2">
            I am always up to date with the latest trends in web-technologies
            and bestPracticed, and I carry out the tasks entrusted to me
            accurately and in time
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
