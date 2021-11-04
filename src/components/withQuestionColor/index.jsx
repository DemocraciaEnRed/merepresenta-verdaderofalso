import React from "react";
import _ from "lodash";
import topicColors from "../../helpers/topicColors";

const WithQuestionColor = ({ render }) => {
  const color = `#${_.get(topicColors, "Legislativas")}`;
  return render(color);
};

export default WithQuestionColor;