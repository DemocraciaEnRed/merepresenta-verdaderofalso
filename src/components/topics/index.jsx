import React from "react";
import Logo from "../logo";
import WithBackground from "../withBackground";
import Background from '../../images/initialLoadingBackground.svg';

const Topics = ({ follow }) => <WithBackground background={Background}>
  <Logo />
  <p>Estos son los temas</p>
  <button onClick={follow}>Next</button>
</WithBackground>;

export default Topics;