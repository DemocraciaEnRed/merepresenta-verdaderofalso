import React from "react";
import "../../App.css";
import "./index.css";

const WithBackground = ({ background, children, light }) => <div className={`game-container ${light? "light" : ""}`} style={{ backgroundImage: `url(${background})` }}>
  {children}
</div>

export default WithBackground;