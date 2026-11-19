
import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "./Joy.css";

function Joy() {
  return (
    <section className="joy-section" id="home">

      <div className="joy-content">

        <h1 className="joy-title">
          Café de Flore
        </h1>

        <p className="joy-text">
          Enjoy good coffee and even better cakes.
          Made of delights. Created 2020.
        </p>

        <Link to="/about" className="joy-button">
          DISCOVER
        </Link>

      </div>

      <Link to="/about" className="joy-scroll">
        <FiChevronDown />
      </Link>

    </section>
  );
}

export default Joy;
