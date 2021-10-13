import React from "react";
import WithTopicColor from "../withTopicColor";
import "./index.css";

const Progress = ({ currentQuestionNumber, questionCount, topic }) => <div>
  <WithTopicColor
    render={color => <span style={{ "color": color }}>{currentQuestionNumber + 1}</span>}
    topic={topic}
  />
  <span> de {questionCount}</span>
</div>;

export default Progress;