import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../asssets/images/logo.svg';
import landingImg from '../../asssets/images/landing.svg';

import studyIcon from '../../asssets/images/icons/study.svg';
import giveClassesIcon from '../../asssets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../asssets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-containter">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar Aulas
          </Link>

        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo!!!" />
        </span>

      </div>
    </div>
  )
}

export default Landing;