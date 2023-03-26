import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import DDD from "../assets/DDD.JPG";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Ali Rudnick</h1>
        <p>I currently reside in Nashville, TN with a passion for country music, dancing, fitness and coding! I am currerntly chasing a passion for web development in a Full-Stack Bootcamp. I am proud to showcase my portfolio. Please contact me with any questions!</p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
      </div>
      
      <div className="right">
        <div className="image-container">
          <div className="img-stack-top">
            <img src={ DDD } className="img" alt="Me"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutContent;