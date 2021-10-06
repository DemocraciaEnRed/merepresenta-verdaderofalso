import React from "react";
import Logo from "../logo";

const Topics = ({ follow }) => <div>
  <Logo />
  <p>Estos son los temas</p>
  <button onClick={follow}>Next</button>
</div>;

export default Topics;