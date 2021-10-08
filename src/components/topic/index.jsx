import _ from "lodash";
import React from "react";
import "./index.css"

const topicColors = {
  "Frases Memorables": "FB2D11",
  "Política Nacional": "4BD6F7",
  "Legislativas": "F7A334",
  "Latinoamérica": "32F991",
  "Elecciones 2021": "9F47FC"
};

const WithTopicColor = ({ render, topic }) => {
  const color = `#${_.get(topicColors, topic)}`;
  return render(color);
};

const Topic = ({ topic }) => {
  return <div className="topic separator">
    <WithTopicColor
      render={color => <p style={{ "background-color": color }} className="topic-name">{_.toUpper(topic)}</p>}
      topic={topic}
    />
  </div>;
}

export default Topic;