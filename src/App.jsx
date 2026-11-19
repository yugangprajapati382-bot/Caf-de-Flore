
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Build from "./Build";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="joy">

        <Nav />

        <Routes>
          <Route path="/" element={<Build />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
