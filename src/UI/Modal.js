import React from "react";
import "./Modal.css";

function Modal({ setOpenModal,search }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
      
        <div className="picture_container">
        <img id="ide1" src={search[0]} alt="nothing to display"/>
        <img id="ide2" src={search[1]} alt="nothing to display"/>
        <img id="ide3"  src={search[2]} alt="nothing to display"/>
        <img id="ide4" src={search[3]} alt="nothing to display"/>
        <img id="ide5" src={search[4]} alt="nothing to display"/>
        <img id="ide6" src={search[5]} alt="nothing to display"/>
        <img id="ide7" src={search[6]} alt="nothing to display"/>
        <img id="ide8" src={search[7]} alt="nothing to display"/>
        </div>
            <button className="cancel_button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
      </div>
  );
}

export default Modal;