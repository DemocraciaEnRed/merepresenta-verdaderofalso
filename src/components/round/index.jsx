import React, { useState, useEffect } from 'react';
import _ from "lodash";
import DicaticQuestion from "../didacticQuestion";
import Score from "../score";
import config from "../../config";
import questionPool from "../../questions.json";

export default function Round({ setPlayAgain }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
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
    <div>
      {
        isActive?
        <DicaticQuestion
          key={currentQuestionNumber}
          question={currentQuestion}
          moveToNext={moveToNext}
          questionCount={questionsCount}
          currentQuestionNumber={currentQuestionNumber}
        />
        : <Score score={score} setPlayAgain={setPlayAgain}/>
      }   
    </div>
  );
};