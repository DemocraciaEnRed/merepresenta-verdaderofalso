import React from "react";
import WithBackground from "../withBackground";
import Logo from "../logo";
import Background from '../../images/initialLoadingBackground.svg';
import "./index.css";

const Landing = ({ follow }) => <WithBackground background={Background}>
  <div className="landing-logo">
    <Logo color="white"/>
    <p className="game-name">TRIVIA</p>
  </div>
  <button onClick={follow}>Next</button>
</WithBackground>

export default Landing;