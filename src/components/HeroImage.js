import "./HeroImageStyles.css";

import React from 'react';
import IntroImg from "../assets/IMG_4455.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
  <div className="hero"> 
    <div className="mask">
        <img className="home-img" 
        src= {IntroImg} alt="HomeImg" />
    </div>
        <div className="content">
            <p>Ali Rudnick</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImage;