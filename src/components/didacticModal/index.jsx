import React from "react";
import { Modal } from "react-bootstrap";
import Topic from "../topic";
import "./index.css"

const Description = ({ question: { description }, answerIsOk }) => {
  return (
    <div>
      <p className="description">{description}</p>
      <p>{answerIsOk? "Ok" : "Not ok"}</p>
    </div>
  );
}

const DidacticModal = ({ question, show, answerIsOk, descriptionRead }) => (
  <Modal show={show} onHide={descriptionRead} className="modal-container">
    <div className="didactic-modal">
      <Topic topic={question.topic} separatorColor="white" textColor="black"/>
      <Modal.Body>
        <Description question={question} answerIsOk={answerIsOk}/>
        <div onClick={descriptionRead} className="continue">
          <p>CONTINUAR</p>
        </div>
      </Modal.Body>
    </div>
  </Modal>
);

export default DidacticModal;