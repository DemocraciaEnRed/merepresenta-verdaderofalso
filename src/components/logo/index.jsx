import React from "react";
import { ReactComponent as IconSvg } from '../../images/meRepresentaIcon.svg';
import { ReactComponent as LogoSvg } from '../../images/meRepresentaLogo.svg';
import "./index.css";


const Logo = ({ color = "white" }) => <div>
  <IconSvg fill={color} className="icon"/>
  <LogoSvg fill={color} />
</div>

export default Logo;