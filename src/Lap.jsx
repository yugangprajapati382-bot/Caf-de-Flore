import React from "react";
import "./Lap.css";

import menuImage from "./menu-title-image.jpg";

function Lap() {
  return (
    <section className="lap-hero">

      <div className="lap-background">
        <img src={menuImage} alt="Cafe Menu" />
      </div>

      <div className="lap-overlay"></div>

      <div className="lap-content">
        <h1>Menu</h1>
      </div>

    </section>
  );
}

export default Lap;