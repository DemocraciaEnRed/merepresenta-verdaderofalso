import React from "react";
import "../../App.css";
import "./index.css";

const MobileSizeScreen = ({ children }) => <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-8">
  {children}
</div>;

export default ({ background, ...props }) => <div className="container" style={{ backgroundImage: `url(${background})` }}>
  <MobileSizeScreen {...props}/>
</div>