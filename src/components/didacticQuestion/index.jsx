import React, { useEffect, useState } from 'react';
import _ from "lodash";
import '../../App.css';
import Question from "../question";
import DidacticModal from "../didacticModal";
import Topic from "../topic";
import Logo from "../logo";
import "./index.css";
import WithFooter from "../withFooter";
import Progress from "../progress";

export default function DidacticQuestion({ question, moveToNext, currentQuestionNumber, questionCount }) {
  const [answered, setAnswered] = useState(false);
  const [answerIsOk, setAnswerIsOk] = useState(false);
  
  const { answer } = question;

  const onOptionSelected = option => {
    if (answered) return;
    const isCorrect = _.isEqual(answer, option);
    setAnswered(true);
    setAnswerIsOk(isCorrect);
  };

  const FooterContent = <Progress current={currentQuestionNumber} total={questionCount} />;

  return <WithFooter content={FooterContent}>
    <Logo  />
    <Topic questionNumber={currentQuestionNumber}/>
    <Question question={question} onOptionSelected={onOptionSelected}/>
    <DidacticModal
      show={answered}
      question={question}
      answerIsOk={answerIsOk}
      descriptionRead={() => moveToNext(answerIsOk)}
      questionNumber={currentQuestionNumber}
    />
  </WithFooter>
}