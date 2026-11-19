import React from "react";
import "./Icn.css";

import contactBanner from "./parallax-image.jpg";
import contactCake from "./home-image-2.png";

function Icn() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    e.target.reset();
  };

  return (
    <div className="icn-page">

      <section className="icn-hero">
        <img
          src={contactBanner}
          alt="Cafe dessert"
          className="icn-hero-image"
        />

        <div className="icn-hero-overlay"></div>

        <div className="icn-hero-content">
          <h1>Contact</h1>
        </div>

      </section>

      <section className="icn-contact-section">

        <div className="icn-contact-container">

          <div className="icn-contact-form">

            <h2>Contact us</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna.
            </p>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Full Name"
                required
              />

              <input
                type="email"
                placeholder="E-mail Address"
                required
              />

              <textarea
                placeholder="Write Message Here"
                required
              ></textarea>

              <button type="submit">
                SEND
              </button>

            </form>

          </div>
          <div className="icn-contact-image">

            <div className="icn-image-circle">
              <img
                src={contactCake}
                alt="Delicious Cafe Cake"
              />
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Icn;