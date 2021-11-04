import React, { useState } from "react";
import { Button } from "react-bootstrap";
import _ from "lodash";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import Background from '../../images/roundBackground.svg';
import FirstLoading from '../../images/firstLoadingBackground.svg';
import SecondLoading from '../../images/secondLoadingBackground.svg';
import ThirdLoading from '../../images/thirdLoadingBackground.svg';
import Logo from "../logo";
import { ReactComponent as IconSvg } from '../../images/meRepresentaIcon.svg';
import Progress from '../progress';
import Separator from '../separator';
import { ReactComponent as Bad } from '../../images/scoreMemes/bad.svg';
import { ReactComponent as Good } from '../../images/scoreMemes/good.svg';
import { ReactComponent as VeryGood } from '../../images/scoreMemes/veryGood.svg';
import { ReactComponent as Excellent } from '../../images/scoreMemes/excellent.svg';
import { ReactComponent as InstagramLogo } from "../../images/instagramLogo.svg";
import { ReactComponent as TwitterLogo } from "../../images/twitterLogo.svg";
import "./index.css";

const resultsByScore = [
  {
    max: 4,
    meme: Bad,
    color: "FB2D11",
    description: "No importa este resultado. ¡Lo importante es que te prepares para votar! ¡Todavía estás a tiempo de hacerlo!",
    secondayDescription: "Acordate que lo más importante es el sentido que le des a TU voto."
  },
  {
    max: 6,
    meme: Good,
    color: "EEFF26",
    description: "Te falta algo de conocimiento sobre cómo funcionan las elecciones. ¡Pero no es un problema! Todavía estás a tiempo de informarte 😉",
    secondayDescription: "Acordate que lo más importante es el sentido que le des a TU voto."
  },
  {
    max: 8,
    meme: VeryGood,
    color: "F7A334",
    description: "¡Se nota que no es tu primera elección! 😉 Poco de lo reglamentario te puede sorprender.",
    secondayDescription: "Ahora, lo más importante es el sentido que le des a TU voto."
  },
  {
    max: 10,
    meme: Excellent,
    color: "32F991",
    description: "¡La tenés clarísima! Nada de lo reglamentario te va a sorprender.",
    secondayDescription: "Ahora, lo más importante es el sentido que le des a TU voto."
  }
];

const resultByScore = score => _.find(resultsByScore, ({ max }) => score <= max);

const ProgressWithResultColor = ({ score, total }) => {
  const result = resultByScore(score);
  const color = `#${result.color}`;

  return <Progress total={total} current={score} color={color} final/>
};

const backgrounds = [ FirstLoading, SecondLoading, ThirdLoading, FirstLoading ];
const FinalLoading = ({ setDoneLoading }) => {
  const [backgroundNumber, setBackgroundNumber] = useState(0);
  const background = _.get(backgrounds, backgroundNumber);
  const moveBackground = () => {
    setBackgroundNumber(backgroundNumber+1);
    if (backgroundNumber == 3)
      setDoneLoading(true);
  }
  setTimeout(moveBackground, 1000)

  return <WithBackground key={backgroundNumber} background={background} className="loading-background">
    <Logo />
  </WithBackground>
};

const Score = ({ score, total, setPlayAgain }) => {
  const [doneLoading, setDoneLoading] = useState(false);
  const { meme: Meme, description, secondayDescription } = resultByScore(score);
  return <div className="full-height">
    {
      doneLoading?
        <WithBackground background={Background}>
          <WithFooter color="white">
            <div className="score-container animate__animated animate__fadeIn">
              <Logo />
              <Separator />
              <div className="result">
                <ProgressWithResultColor score={score} total={total} />
              </div>
              <Meme className="meme" alt="meme resultado" />
              <div className="col-10">
                <p className="score-description">{_.toUpper(description)}</p>
                { secondayDescription && <p className="score-secondary-description">{_.toUpper(secondayDescription)}</p> }
                <p className="score-more-info">PARA SABER MÁS SOBRE LAS CANDIDATURAS Y LAS PROPUESTAS ENTRÁ A #MEREPRESENTA</p>
              </div>
              <Button className="col-md-3 col-sm-4 col-10 play-again" variant="outline-light" onClick={setPlayAgain}>VOLVER A JUGAR</Button>
              <p>o</p>
              <p className="more-info">Encontrá más info sobre las elecciones en: </p>
              <Button target="_blank" href="https://merepresenta.info/" className="col-md-3 col-sm-4 col-10 merepresenta-button" variant="light">#MEREPRESENTA</Button>
              <p>Para conocer lo que hacemos seguinos en:</p>
              <a href="https://www.instagram.com/democraciaenred" target="_blank">
                <InstagramLogo alt="instagram" />
              </a>
              <a href="https://twitter.com/fundacionDER" target="_blank" className="twitter">
                <TwitterLogo alt="twitter" />
              </a>
            </div>
          </WithFooter>
        </WithBackground>
      : <FinalLoading setDoneLoading={setDoneLoading}/>
  }
  </div>
};

export default Score;