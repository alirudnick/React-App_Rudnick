import "./FooterStyle.css";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import { FaPhone} from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-contact">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>8421 Callabee Way, 9</p>
                        <p>Nashville, TN 37013</p>
                    </div>
                </div>
                <div className="phone"><h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                937.459.6038</h4>
                </div>
                <div className="email"><h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                ali.rudnick@yahoo.com</h4>
                </div>
            </div>
            <div className="right">
    <div className="social">
        <a href="https://www.facebook.com/ali.rudnick/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
        </a>
        <a href="https://www.instagram.com/alirudnick/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}} />
        </a>
        <a href="https://www.linkedin.com/in/alysia-rudnick/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
        </a>
        <a href="https://github.com/alirudnick" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}} />
        </a>

    </div>
</div>

        </div>
    </div>
  );
};

export default Footer;