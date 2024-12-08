import React from 'react';
import { Modal } from 'react-bootstrap';

const MyModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="d-grid gap-md-5">
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <img src="./media/info/El.field.jpg" className="modal-image" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src="./media/info/Mag_field.jpg" className="modal-image" />
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col d-flex justify-content-center">
            <img src="./media/info/магПоле.jpg" className="modal-image" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src="./media/info/елПоле.jpg" className="modal-image" />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src="./media/info/генератор.jpg" className="modal-image" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
