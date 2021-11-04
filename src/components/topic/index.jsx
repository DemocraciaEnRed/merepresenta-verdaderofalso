import React from "react";
import _ from "lodash";
import WithQuestionColor from "../withQuestionColor";
import "./index.css";

const QuestionLabel = ({ questionNumber, separatorColor = "white" }) => {
  return <div className={`topic separator ${separatorColor}`}>
    <WithQuestionColor
      render={color => <p style={{ "backgroundColor": color }} className="topic-name">PREGUNTA {questionNumber + 1}</p>}
      questionNumber={questionNumber}
    />
  </div>;
}

export default QuestionLabel;