import React from "react";
import "./Modal.css";
function Modal() {
    return (
        <div className="instructionsModal">
            <div className="modal-content">
              <h4 className="center">Game Instructions</h4>
                <ol>
                    <li>Click on "Start Game" below to start the game</li>
                    <li>Click all images once without repeating - You WIN!!!</li>
                    <li>If an images is clicked more than once during the round - You LOSE!!!</li>
                </ol>
            </div>
            <br />
            <div className="modal-footer white-text center">
              <a className="waves-effect waves-light btn" onClick={() => {
                document.getElementsByClassName("instructionsModal")[0]
                .classList.add("hide");
              }}> Start Game </a>
            </div>
        </div>
    )
}

export default Modal;