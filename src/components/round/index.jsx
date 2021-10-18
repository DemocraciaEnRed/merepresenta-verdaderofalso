import React, { useState, useEffect } from 'react';
import _ from "lodash";
import DicaticQuestion from "../didacticQuestion";
import Background from '../../images/roundBackground.svg';
import WithBackground from "../withBackground";
import Score from "../score";
import Logo from "../logo";
import config from "../../config";
import questionPool from "../../questions.json";
import "./index.css";

const Countdown = ({ setIsLoading }) => {
  const [loadingNumber, setLoadingNumber] = useState(5);

  const onCountDown = () => {
    setLoadingNumber(loadingNumber-1)
    if (loadingNumber == 1)
      setIsLoading(false);
  };

  const numbers = {
    5: "FB2D11",
    4: "4BD6F7",
    3: "F7A334",
    2: "32F991",
    1: "9F47FC"
  };
  

  return <div>
    <Logo />
    <p className="ready">¿Listo?</p>
    <p
      key={loadingNumber}
      className="centered countdown-number animate__animated animate__fadeOut"
      onAnimationEnd={onCountDown}
      style={{ color: `#${numbers[loadingNumber]}` }}
    >
      {loadingNumber}
    </p>
  </div>;
}

export default function Round({ setPlayAgain }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const roundQuestions = _.sampleSize(questionPool, config.questionsPerRound);
    setQuestions(roundQuestions);
  }, []);

  if (_.isEmpty(questions)) return null;
  
  const moveToNext = isCorrect => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestionNumber(currentQuestionNumber + 1)
  };
  
  const questionsCount = _.size(questions);
  const isActive = currentQuestionNumber < questionsCount;
  const currentQuestion = questions[currentQuestionNumber];

  return (
    <div className="animate__animated animate__fadeIn animate__fast">
    {
      isActive?
        <WithBackground background={Background} light>
          {
            isLoading? <Countdown setIsLoading={setIsLoading}/>
            : <div className="full-height animate__animated animate__fadeIn">
              <DicaticQuestion
                key={currentQuestionNumber}
                question={currentQuestion}
                moveToNext={moveToNext}
                questionCount={questionsCount}
                currentQuestionNumber={currentQuestionNumber}
              />
            </div>
          }
        </WithBackground>
        : <Score score={score} setPlayAgain={setPlayAgain}/>
      }
    </div>
  );
};