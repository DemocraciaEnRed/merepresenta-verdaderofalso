import Round from "./components/round";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Logo from "./components/logo";
import "./App.css"

const Landing = ({ follow }) => <div>
  <p>Merre</p>
  <button onClick={follow}>Next</button>
</div>

const Topics = ({ follow }) => <div>
  <Logo />
  <p>Estos son los temas</p>
  <button onClick={follow}>Next</button>
</div>;

function App() {
  const [currentStep, setCurrentStep] = useState("landing");
  const [playAgain, setPlayAgain] = useState();
  const Game = ({ setPlayAgain }) => {
    return <Round setPlayAgain={setPlayAgain}/>;
  };

  const steps = {
    "landing": () => <Landing follow={() => setCurrentStep("topics")}/>,
    "topics": () => <Topics follow={() => setCurrentStep("game")}/>,
    "game": () => <Game setPlayAgain={setPlayAgain}/>
  };

  const Step = _.get(steps, currentStep);

  return <div className="App">
      <Step />
  </div>;
}

export default App;
