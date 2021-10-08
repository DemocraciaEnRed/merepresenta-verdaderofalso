import React from "react";
import _ from "lodash";
import WithTopicColor from "../withTopicColor";
import "./index.css";

const Topic = ({ topic }) => {
  return <div className="topic separator">
    <WithTopicColor
      render={color => <p style={{ "backgroundColor": color }} className="topic-name">{_.toUpper(topic)}</p>}
      topic={topic}
    />
  </div>;
}

export default Topic;