import React from "react";
import WithBackground from "../withBackground";
import Logo from "../logo";
import Background from '../../images/initialLoadingBackground.svg';
import "./index.css";

const Landing = ({ follow }) => <WithBackground background={Background}>
  <div className="centered animate__animated animate__fadeIn animate__delay-1s">
    <div className="animate__animated animate__fadeOut animate__delay-2s" onAnimationEnd={follow}>
      <Logo color="white"/>
      <p className="game-name">TRIVIA</p>
    </div>
  </div>
</WithBackground>

export default Landing;