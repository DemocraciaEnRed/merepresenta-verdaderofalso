import React, { useState } from "react";
import { Button } from "react-bootstrap";
import _ from "lodash";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import Background from '../../images/scoreBackground.svg';
import FirstLoading from '../../images/firstLoadingBackground.svg';
import SecondLoading from '../../images/secondLoadingBackground.svg';
import ThirdLoading from '../../images/thirdLoadingBackground.svg';
import Logo from "../logo";
import { ReactComponent as IconSvg } from '../../images/meRepresentaIcon.svg';
import Progress from '../progress';
import Separator from '../separator';
import bad from '../../images/scoreMemes/bad.png';
import good from '../../images/scoreMemes/good.png';
import veryGood from '../../images/scoreMemes/veryGood.png';
import excellent from '../../images/scoreMemes/excellent.gif';
import { ReactComponent as InstagramLogo } from "../../images/instagramLogo.svg";
import { ReactComponent as TwitterLogo } from "../../images/twitterLogo.svg";
import "./index.css";

const resultsByScore = [
  {
    max: 4,
    meme: bad,
    color: "FB2D11",
    description: "no importa este resultado, es importante  prepararte para las Elecciones Legislativas 2021 y para eso entrá a #MeRepresenta.",
    secondayDescription: "El día de las elecciones, todas las personas tenemos el mismo peso: un poderoso y una empleada, una CEO y un cartonero. Esa igualdad es la esencia de nuestro sistema"
  },
  {
    max: 6,
    meme: good,
    color: "EEFF26",
    description: "poco conocimiento de política argentina, igual tenes que votar! Pasá por #MeRepresenta para saber todo sobre las Elecciones Legislativas 2021"
  },
  {
    max: 8,
    meme: veryGood,
    color: "F7A334",
    description: "sos un gran conocedor de la política argentina. para saber todo sobre las Elecciones Legislativas 2021, entrá a #MeRepresenta"
  },
  {
    max: 10,
    meme: excellent,
    color: "32F991",
    description: "EXCELENTE! Entra a #MeRepresenta para seguir nutriendo tu conocimiento con información sobre las Elecciones Legislativas 2021"
  }
];

const resultByScore = score => _.find(resultsByScore, ({ max }) => score <= max);

const ProgressWithResultColor = ({ score }) => {
  const result = resultByScore(score);
  const color = `#${result.color}`;

  return <Progress total={10} current={score} color={color} />
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
  setTimeout(moveBackground, 800)

  return <WithBackground key={backgroundNumber} background={background} className="loading-background">
    <Logo color="white"/>
    <IconSvg fill="white" className="centered loading-logo"/>
  </WithBackground>
};

const Score = ({ score, total, setPlayAgain }) => {
  const [doneLoading, setDoneLoading] = useState(false);
  const { meme, description, secondayDescription } = resultByScore(score);
  return <div className="full-height">
    {
      doneLoading?
        <WithBackground background={Background}>
          <WithFooter color="white">
            <div className="score-container animate__animated animate__fadeIn">
              <Logo color="white"/>
              <Separator color="white" />
              <div className="result">
                <ProgressWithResultColor score={score} total={total} />
              </div>
              <img className="meme" src={meme} alt="meme resultado" />
              <div className="col-10">
                <p className="score-description">{_.toUpper(description)}</p>
                { secondayDescription && <p>{_.toUpper(secondayDescription)}</p> }
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