import React from "react";
import WithBackground from "../withBackground";
import Background from '../../images/scoreBackground.svg';
import Progress from '../progress';
import excellent from '../../images/scoreGifs/excellent.gif';

const Score = ({ score, setPlayAgain }) => <WithBackground background={Background}>
  <Progress total={10} current={score} />
  <img src={excellent} alt="loading..." />
  <p>{score}</p>
  <button onClick={setPlayAgain}>Jugar de nuevo</button>
</WithBackground>;

export default Score;