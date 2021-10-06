import React from "react";
import { Modal, Button } from "react-bootstrap";

const Description = ({ question: { description }, answerIsOk }) => {
  return (
    <div>
      <p>{description}</p>
      <p>{answerIsOk? "Ok" : "Not ok"}</p>
    </div>
  );
}

const DidacticModal = ({ question, show, answerIsOk, descriptionRead }) => (
  <Modal show={show} onHide={descriptionRead}>
    <Modal.Header>
      <Modal.Title>{question.topic}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Description question={question} answerIsOk={answerIsOk}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={descriptionRead}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DidacticModal;