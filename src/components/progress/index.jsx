import React from "react";
import WithTopicColor from "../withTopicColor";
import "./index.css";

const CurrentNumber = ({ color, current }) => <span style={{ "color": color }}>{current + 1}</span>;
const OfTotal = ({ total }) => <span> de {total}</span>

const Progress = ({ current, total, topic }) => {
  const isFinalOne = !topic;
  return <div className={isFinalOne && "final"}>
    {
      !isFinalOne?
        <WithTopicColor
          render={color => <CurrentNumber color={color} current={current}/>}
          topic={topic}
        />
      : <CurrentNumber color="red" current={current} />
    }
    <OfTotal total={total} />
  </div>;
};

export default Progress;