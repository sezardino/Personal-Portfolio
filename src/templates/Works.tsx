import * as React from "react";
import Layout from "../components/layout";

const Works = () => {
  return (
    <Layout>
      <section className="portfolio container">
        <h2 className="title title--main title--portfolio portfolio__title">
          <span className="row  animate__animated animate__rotateInDownRight animate__delay-10">
            <span className="title__letter title__letter--scale">P</span>
            <span className="title__letter title__letter--scale">o</span>
            <span className="title__letter title__letter--scale">r</span>
            <span className="title__letter title__letter--scale">t</span>
            <span className="title__letter title__letter--scale">f</span>
          </span>
          <span className="row  animate__animated animate__rotateInDownRight animate__delay-11">
            <span className="title__letter title__letter--scale">o</span>
            <span className="title__letter title__letter--scale">l</span>
            <span className="title__letter title__letter--scale">i</span>
            <span className="title__letter title__letter--scale">o</span>
          </span>
        </h2>
        <div className="portfolio__wrapper ">
          <ul className="portfolio__list  undefined animate__delay-1"></ul>
          <div className="scroll scroll--white portfolio__scroll  animate__animated animate__fadeIn animate__delay-5">
            <div className="scroll__track">
              <div
                className="scroll__bar"
                style={{ top: "0%", transform: "translate(-50%, 0%)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Works;
