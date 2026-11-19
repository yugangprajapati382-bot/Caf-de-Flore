import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

import logo from "./logo-double.png";
import footerImage from "./footer.jpg";

function Footer() {
  return (
    <footer
      className="cafe-footer"
      style={{
        backgroundImage: `url(${footerImage})`,
      }}
    >
      <div className="footer-logo">
        <a href="/contact">
          <img src={logo} alt="Cafe de Flore Logo" />
        </a>
      </div>

      <div className="footer-content">
        <h2>Café de Flore</h2>
        <p>
          When life gives you lemons, trade them for coffee.
        </p>

        <div className="footer-socials">
          <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <span></span>
          <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>

          <span></span>
          <a href="https://in.pinterest.com/" target="_blank" aria-label="Pinterest">
            <FaPinterestP />
          </a>
          <span></span>

          <a href="https://in.linkedin.com/" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;