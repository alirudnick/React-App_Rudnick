import React from "react";
import "./index.css";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

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
