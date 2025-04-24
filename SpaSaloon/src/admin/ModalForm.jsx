import React from "react";
import "./ModalForm.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        {children}
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={() => alert("Guardar")}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
