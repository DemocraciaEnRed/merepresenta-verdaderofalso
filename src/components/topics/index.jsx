import React from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";
import Logo from "../logo";
import WithBackground from "../withBackground";
import Background from '../../images/roundBackground.svg';
import topicColors from "../../helpers/topicColors";
import "./index.css";

const Topics = ({ follow }) => <WithBackground background={Background}>
  <div className="animate__animated animate__fadeIn">
    <Logo />
    <div className="topics col-10">
      <p className="topics-description">Te vamos a hacer 10 preguntas de estas 5 categorías:</p>
      <Button onClick={follow} className="col-md-3 col-sm-4 col-10 play" variant="outline-light">JUGAR</Button>
      <p className="game-owner">Desarrollado por Directorio Legislativo y Democracia en Red</p>
    </div>
  </div>
</WithBackground>

export default Topics;