import React from "react";
import _ from "lodash";
import topicColors from "../../helpers/topicColors";

const WithQuestionColor = ({ render, questionNumber }) => {
  const color = `#${_.nth(topicColors, questionNumber % _.size(topicColors))}`;
  return render(color);
};

export default WithQuestionColor;