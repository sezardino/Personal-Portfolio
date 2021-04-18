import * as React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <section className="contact container">
        <div className="contact__wrapper">
          <h2 className="title title--contact title--main contact__title animate__animated animate__jackInTheBox">
            Contact
          </h2>
          <ul className="info contact__info">
            <li className="info__item animate__delay-16 animate__animated animate__zoomIn">
              <span className="info__def">tel:</span>
              <span className="info__data">+48 576 048 669</span>
            </li>
            <li className="info__item animate__delay-17 animate__animated animate__zoomIn">
              <span className="info__def">e-mail:</span>
              <span className="info__data">e.arechwa@gmail.com</span>
            </li>
          </ul>
        </div>
        <ul className="social contact__social">
          <li className="social__item animate__delay-13 animate__animated animate__zoomIn">
            <a
              href="https://github.com/sezardino"
              target="blank"
              className="social__link"
            >
              git
            </a>
          </li>
          <li className="social__item animate__delay-14 animate__animated animate__zoomIn">
            <a
              href="https://www.facebook.com/edvard.arekhva/"
              target="blank"
              className="social__link"
            >
              f
            </a>
          </li>
          <li className="social__item animate__delay-15 animate__animated animate__zoomIn">
            <a
              href="https://vk.com/sezardino"
              target="blank"
              className="social__link"
            >
              vk
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Contact;
