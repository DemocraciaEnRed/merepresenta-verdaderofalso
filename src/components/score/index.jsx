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
// import { ReactComponent as InstagramLogo } from "../../images/instagramLogo.svg";
// import { ReactComponent as TwitterLogo } from "../../images/twitterLogo.svg";
import trivia from '../../images/trivia.png';
import { ReactComponent as TwitterIcono } from "../../images/iconoX.svg";
import { ReactComponent as WhatsappIcono } from "../../images/iconoWhats.svg";
import { ReactComponent as LinkIcono } from "../../images/iconoLink.svg";

import "./index.css";

const resultsByScore = [
  {
    max: 4,
    meme: Bad,
    color: "FB2D11",
    description: 'A Walt Disney lo despidieron de su primer trabajo por "falta de imaginación". Mirá si vos no vas a poder dar vuelta este resultado.',
    secondayDescription: "Acordate que lo más importante es el sentido que le des a TU voto."
  },
  {
    max: 6,
    meme: Good,
    color: "EEFF26",
    description: "Podrías saber un poco más sobre cómo funcionan las elecciones, no te vamos a mentir. ¡Pero no es un problema! Todavía estás a tiempo de informarte 😉",
    secondayDescription: "Acordate que lo más importante es el sentido que le des a TU voto."
  },
  {
    max: 8,
    meme: VeryGood,
    color: "F7A334",
    description: "Sin duda, tenés altas chances de ganar en la discusión familiar del domingo.",
    secondayDescription: "Ahora, lo más importante es el sentido que le des a TU voto."
  },
  {
    max: 10,
    meme: Excellent,
    color: "32F991",
    description: "Qué no te vengan a discutir nada reglamentario a vos, eh. La tenés MUY clara.",
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

  const textShare = `A ver si superás mi puntaje ${score}/10 en este Verdadero o Falso sobre las Elecciones \nPoné a prueba tus conocimientos y veamos quién es sabe más 😉 \nEntrá a MR y enterate de todo lo que necesitás saber para estas elecciones.\n\nEntra a https://verdaderofalso.merepresenta.info/ para Jugar`

    const shareOnWhatsApp = () => {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textShare)}`;
      window.open(whatsappUrl, '_blank');
    };

    const shareOnTwitter = () => {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textShare)}`;
      window.open(twitterUrl, '_blank');
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(textShare);
    };



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

              <p className="share-text">Compartí tu resultado en Redes sociales</p> 
              <div>
                <a onClick={shareOnTwitter} className="iconos">
                  <TwitterIcono alt="twitter" />
                </a>
                <a onClick={shareOnWhatsApp}  className="iconos">
                  <WhatsappIcono alt="twitter" />
                </a>
                <a onClick={copyToClipboard} className="iconos">
                  <LinkIcono alt="twitter" />
                </a>
                {/* <a  className="iconos">
                  <JpgIcono alt="twitter" />
                </a>                                 */}
              </div>

              <div>
                <Button className="col-md-3 col-sm-4 col-10 play-again" variant="outline-light" onClick={setPlayAgain}>VOLVER A JUGAR</Button>
                <p className="call-to">Te invitamos a Jugar a:</p> 
                <a href="https://trivia.merepresenta.info/" >
                  <img className="trivia" src={trivia} alt="Jugar a trivia" />
                </a>                
                <p>o</p>
                <p className="more-info">Encontrá más info sobre las elecciones en: </p>
                <Button target="_blank" href="https://merepresenta.info/" className="col-md-3 col-sm-4 col-10 merepresenta-button" variant="light">#MEREPRESENTA</Button>

              </div>
              {/* <p>Para conocer lo que hacemos seguinos en:</p>
              <a href="https://www.instagram.com/democraciaenred" target="_blank">
                <InstagramLogo alt="instagram" />
              </a>
              <a href="https://twitter.com/fundacionDER" target="_blank" className="twitter">
                <TwitterLogo alt="twitter" />
              </a> */}
            </div>
          </WithFooter>
        </WithBackground>
      : <FinalLoading setDoneLoading={setDoneLoading}/>
  }
  </div>
};

export default Score;