import React, { useEffect, useState } from 'react';
import _ from "lodash";
import '../../App.css';
import Question from "../question";
import DidacticModal from "../didacticModal";
import Topic from "../topic";
import Logo from "../logo";
import "./index.css";
import Background from '../../images/roundBackground.svg';
import WithBackground from "../withBackground";

export default function DidacticQuestion({ question, moveToNext, currentQuestionNumber, questionCount }) {
  const [answered, setAnswered] = useState(false);
  const [answerIsOk, setAnswerIsOk] = useState(false);
  const [options, setOptions] = useState([]);
  
  const { answer, incorrectAnswers, topic } = question;
  useEffect(() => {
    const shuffledOptions = _(incorrectAnswers).concat(answer).shuffle().value();
    setOptions(shuffledOptions);
  }, [answer, incorrectAnswers]);

  const onOptionSelected = option => {
    if (answered) return;
    const isCorrect = _.isEqual(answer, option);
    setAnswered(true);
    setAnswerIsOk(isCorrect);
  };

  const Progress = () => <p>{currentQuestionNumber + 1} / {questionCount}</p>;

  return (
    <WithBackground background={Background}>
      <Logo topic={topic} />
      <Topic topic={topic}/>
      <Question question={question} options={options} onOptionSelected={onOptionSelected}/>
      <Progress />
      <DidacticModal
        show={answered}
        question={question}
        answerIsOk={answerIsOk}
        descriptionRead={() => moveToNext(answerIsOk)}
      />
    </WithBackground>
  );
}