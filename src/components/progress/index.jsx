import React from "react";
import WithQuestionColor from "../withQuestionColor";
import "./index.css";

const CurrentNumber = ({ color, current }) => <span style={{ "color": color }}>{current}</span>;
const OfTotal = ({ total }) => <span className="off-total"> de {total}</span>;

const Progress = ({ current, total, color, final }) => {
  const isFinalOne = final;
  return <div className={isFinalOne? "final" : ""}>
    {
      !isFinalOne?
        <WithQuestionColor
          render={color => <CurrentNumber color={color} current={current}/>}
          questionNumber={current}
        />
      : <CurrentNumber color={color} current={current} />
    }
    <OfTotal total={total} />
  </div>;
};

export default Progress;