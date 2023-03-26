import React from 'react';
import "./Resume.css";

export default function Resume() {
    return (
        <div className="resume" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <a href="https://drive.google.com/file/d/10ihfYzfWggI6G9EezZZu17xw9SmQrhol/view?usp=share_link" download="">Click here to download.</a>
            <h2 className="tech-header">Front-end Proficiencies</h2>
            <ul className="tech-names">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
            </ul>
            <h2 className="tech-header">Back-end Proficiencies</h2>
            <ul className="tech-names">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}
