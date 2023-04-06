import "./ProjectCardStyles.css";

import React from 'react';
import longevity from '../assets/Proj_Longevity.png';
import horiseon from '../assets/Proj_Horiseon.png';
import notetaker from '../assets/Proj_notetaker.png';
import quiz from '../assets/Proj_Quiz.png';
import password from '../assets/Proj_password.png';
import scheduler from '../assets/Proj_scheduler.png';
import coin from '../assets/Proj_coin.png';
import book from '../assets/Proj_read.png';
import team from '../assets/Proj_Team.png';

export default function Projects() {
  return (
    <div className="projects">
      <div className="work-container primary-container">
        <a href="https://rocky-thicket-55053.herokuapp.com/" target="_blank" rel="">
          <img src={longevity} alt="Longevity"/>
        </a>
        <h3><a href="https://github.com/alexisbenavidez99/workout-tracker">Longevity</a></h3>
      </div>

      <div className="work-container">
        <a href="http://127.0.0.1:3000/Horiseon_Rudnick_Ch1/index.html" target="_blank" rel="">
          <img src={horiseon} alt="Horiseon"/>
        </a>
        <h3><a href="https://github.com/alirudnick/Horiseon_Rudnick_Ch1">Horiseon</a></h3>
        <p><a href="https://github.com/alirudnick/Horiseon_Rudnick_Ch1"></a></p>
      </div>

      <div className="work-container">
        <a href="https://expressjs-note-taker.herokuapp.com/" target="_blank" rel="">
          <img src={notetaker} alt="Notetaker"/>
        </a>
        <h3><a href="https://github.com/alirudnick/alirudnick-Express.js-Note-Taker_Rudnick.git">Note Taker</a></h3>
        <p><a href="https://github.com/alirudnick/Password-Generator_Rudnick.git"></a></p>
      </div>

      <div className="work-container">
        <a href="https://alirudnick.github.io/CodeQuiz_Rudnick/" target="_blank" rel="">
          <img src={quiz} alt="Quiz"/>
        </a>
        <h3><a href="https://github.com/alirudnick/CodeQuiz_Rudnick.git">Code Quiz</a></h3>
        <p><a href="https://github.com/alirudnick/CodeQuiz_Rudnick.git"></a></p>
      </div>

      <div className="work-container">
        <a href="https://alirudnick.github.io/Password-Generator_Rudnick/" target="_blank" rel="">
          <img src={password} alt="Password Generator"/>
        </a>
        <h3><a href="https://github.com/alirudnick/Password-Generator_Rudnick.git">Password Generator</a></h3>
        <p><a href="https://github.com/alirudnick/Password-Generator_Rudnick.git"></a></p>
      </div>

      <div className="work-container">
        <a href="https://github.com/alirudnick/OOP_Team-Profile-Generator_Rudnick" target="_blank" rel="">
          <img src={coin} alt="Coinspire"/>
        </a>
        <h3><a href="https://github.com/devkjoon/coinspire.git">Coinspire</a></h3>
        <p><a href="https://github.com/devkjoon/coinspire.git"></a></p>
      </div>

      <div className="work-container">
        <a href="https://alirudnick.github.io/Work-Day-Scheduler_Rudnick/" target="_blank" rel="">
          <img src={scheduler} alt="Scheduler"/>
        </a>
        <h3><a href="https://github.com/alirudnick/Work-Day-Scheduler_Rudnick">Work Day Scheduler</a></h3>
        <p><a href="https://github.com/alirudnick/Work-Day-Scheduler_Rudnick"></a></p>
      </div>

      <div className="work-container">
        <a href="https://github.com/alirudnick/OOP_Team-Profile-Generator_Rudnick" target="_blank" rel="">
          <img src={team} alt="Team Generator"/>
        </a>
        <h3><a href="https://github.com/alirudnick/OOP_Team-Profile-Generator_Rudnick">Team Generator</a></h3>
        <p><a href="https://github.com/alirudnick/OOP_Team-Profile-Generator_Rudnick"></a></p>
      </div>

      <div className="work-container">
        <a href="https://book-haven.herokuapp.com/" target="_blank" rel="">
          <img src={book} alt="Book Store"/>
        </a>
        <h3><a href="https://github.com/Nmotley92/e-commerce-site">Book Haven</a></h3>
        <p><a href="https://github.com/Nmotley92/e-commerce-site"></a></p>
      </div>

    </div>
  )
}
