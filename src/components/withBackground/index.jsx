import React from "react";
import "../../App.css";
import "./index.css";

const WithBackground = ({ background, children }) => <div className="game-container" style={{ backgroundImage: `url(${background})` }}>
  {children}
</div>

export default WithBackground;