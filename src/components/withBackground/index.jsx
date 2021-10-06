import React from "react";
import "../../App.css";
import "./index.css";

const MobileSizeContainer = ({ children }) => <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-8">
  {children}
</div>;

const WithBackground = ({ background, ...props }) => <div className="game-container" style={{ backgroundImage: `url(${background})` }}>
  <MobileSizeContainer {...props}/>
</div>

export default WithBackground;