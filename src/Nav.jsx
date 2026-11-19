
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./logo-double.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="cafe-navbar">

      <div className="cafe-socials">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <span></span>

        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <span></span>

        <a href="https://in.pinterest.com/" target="_blank" rel="noreferrer">
          <FaPinterestP />
        </a>
        <span></span>

        <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="cafe-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Cafe de Flore Logo" />
        </Link>
      </div>

      <button
        className="cafe-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav className={`cafe-nav-menu ${menuOpen ? "active" : ""}`}>

        <Link to="/" className="cafe-nav-link" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" className="cafe-nav-link" onClick={closeMenu}>
          About
        </Link>

        <Link to="/menu" className="cafe-nav-link" onClick={closeMenu}>
          Menu
        </Link>

        <Link to="/contact" className="cafe-nav-link" onClick={closeMenu}>
          Contact
        </Link>

      </nav>

    </header>
  );
}

export default Nav;


// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaPinterestP,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
// import "./Nav.css";
// import logo from "./logo-double.png";

// function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <>
//       <section className="cafe-home" id="home">

//         <header className="cafe-navbar">

//           <div className="cafe-socials">
//             <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
//               <FaFacebookF />
//             </a>

//             <span></span>

//             <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
//               <FaInstagram />
//             </a>

//             <span></span>

//             <a href="https://in.pinterest.com/" target="_blank" aria-label="Pinterest">
//               <FaPinterestP />
//             </a>

//             <span></span>

//             <a href="https://in.linkedin.com/" target="_blank" aria-label="LinkedIn">
//               <FaLinkedinIn />
//             </a>
//           </div>

//           <div className="cafe-logo">
//             <a href="/">
//               <img
//                 src={logo}
//                 alt="Cafe de Flore Logo"
//               />
//             </a>
//           </div>

//           <button
//             className="cafe-menu-toggle"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>

//           <nav
//             className={`cafe-nav-menu ${
//               menuOpen ? "active" : ""
//             }`}
//           >
//             <a
//               href="/"
//               className="cafe-nav-link"
//               onClick={closeMenu}
//             >
//               Home
//             </a>

//             <a
//               href="/about"
//               className="cafe-nav-link"
//               onClick={closeMenu}
//             >
//               About
//             </a>

//             <a
//               href="/menu"
//               className="cafe-nav-link"
//               onClick={closeMenu}
//             >
//               Menu
//             </a>

//             <a
//               href="/contact"
//               className="cafe-nav-link"
//               onClick={closeMenu}
//             >
//               Contact
//             </a>
//           </nav>

//         </header>

//         <div className="cafe-hero-content">

//           <h1>Café de Flore</h1>

//           <p>
//             Enjoy good coffee and even better cakes.
//             Made of delights. Created 2020.
//           </p>

//           <a href="/about" className="cafe-discover-btn">
//             Discover
//           </a>

//         </div>

//         <a href="/about" className="cafe-scroll-down">
//           <FiChevronDown />
//         </a>

//       </section>
//     </>
//   );
// }

// export default Nav;