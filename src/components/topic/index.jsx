import _ from "lodash";
import React from "react";
import "./index.css"

const Topic = ({ topic }) => <p className="topic">{_.toUpper(topic)}</p>

export default Topic;