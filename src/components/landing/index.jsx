import React from "react";
import WithBackground from "../withBackground";
import Background from '../../images/initialLoadingBackground.svg';

const Landing = ({ follow }) => <WithBackground background={Background}>
  <p>Merre</p>
  <button onClick={follow}>Next</button>
</WithBackground>

export default Landing;