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
import Progress from "../progress";
import Separator from "../separator";

const FooterSeparator = () => <Separator />;
const Footer = ({ children }) => <div className="footer navbar fixed-bottom">{children}</div>;

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

  return (
    <WithBackground background={Background} light>
      <Logo topic={topic} />
      <Topic topic={topic}/>
      <Question question={question} options={options} onOptionSelected={onOptionSelected}/>
      <Footer>
        <Progress current={currentQuestionNumber+1} total={questionCount} topic={topic}/>
        <FooterSeparator />
      </Footer>
      <DidacticModal
        show={answered}
        question={question}
        answerIsOk={answerIsOk}
        descriptionRead={() => moveToNext(answerIsOk)}
      />
    </WithBackground>
  );
}