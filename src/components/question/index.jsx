import _ from "lodash";
import React from "react";
import { Button, Row } from "react-bootstrap";
import "./index.css";

const Option = ({ onOptionSelected, option }) =>
  <Button className="btn btn-dark option-button col-md-12" onClick={() => onOptionSelected(option)}>
    <span className="option-text">{_.toUpper(option)}</span>
  </Button>

const Question = ({ question, options, onOptionSelected }) => (
  <div>
    <p>{question.text}</p>
    <div className="col-md-8">
      {options.map((option, number) =>
        <Row key={number} className="option">
          <Option
            question={question}
            option={option}
            onOptionSelected={onOptionSelected}
          />
        </Row>
      )}
    </div>
  </div>
);

export default Question;