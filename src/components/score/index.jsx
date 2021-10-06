import React from "react";
import WithBackground from "../withBackground";
import Background from '../../images/scoreBackground.svg';

const Score = ({ score, setPlayAgain }) => <WithBackground background={Background}>
  <p>{score}</p>
  <button onClick={setPlayAgain}>Jugar de nuevo</button>
</WithBackground>;

export default Score;