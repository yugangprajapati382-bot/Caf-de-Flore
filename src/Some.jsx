import React from "react";
import "./Some.css";

import aboutImage1 from "./about-image-1.png";
import aboutImage2 from "./about-image-2.png";
import aboutBackground from "./about-section-background.png";
import aboutTitleImage from "./about-title-image.jpg";

function Some() {
  return (
    <div className="some-page">

      <section className="some-hero">

        <img
          src={aboutImage1}
          alt="Decorative flower"
          className="some-flower-left"
        />

        <img
          src={aboutImage2}
          alt="Decorative signature"
          className="some-flower-right"
        />

        <div className="some-hero-background">
          <img
            src={aboutTitleImage}
            alt="Cafe dessert"
          />
        </div>

        <div className="some-hero-content">
          <span className="some-small-title">
            WELCOME TO OUR WORLD
          </span>

          <h1>About</h1>

          <div className="some-title-line"></div>

          <p>
            Discover the story behind our coffee,
            cakes and beautiful moments.
          </p>
        </div>

      </section>
    </div>
  );
}

export default Some;