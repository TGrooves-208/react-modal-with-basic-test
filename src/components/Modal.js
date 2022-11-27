import React from "react";
import "../components/Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseButton">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Heading for ui string that will get translated</h1>
        </div>
        <div className="body">
          <p>This will be the message for the modal.</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancelButton">Cancel</button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
