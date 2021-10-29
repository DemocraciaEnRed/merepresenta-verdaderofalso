import React from "react";
import WithTopicColor from "../withTopicColor";
import "./index.css";

const CurrentNumber = ({ color = "black", current }) => <span style={{ "color": color }}>{current}</span>;
const OfTotal = ({ total }) => <span> de {total}</span>;

const Progress = ({ current, total, final, color }) => {
  const isFinalOne = final;
  return <div className={"score" + " " + (isFinalOne? "final" : "partial")}>
    {
      <CurrentNumber color={color} current={current} />
    }
    <OfTotal total={total} />
  </div>;
};

export default Progress;