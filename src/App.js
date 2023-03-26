import React from "react";
import "./index.css";
import Resume from "../src/pages/Resume";
import About from "../src/pages/About";
import Project from "../src/pages/Project";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
