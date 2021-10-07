import _ from "lodash";
import React from "react";
import "./index.css"

const Topic = ({ topic }) => <div className="topic">
  <p className="topic-name">{_.toUpper(topic)}</p>
</div>;

export default Topic;