// src/components/CrmModal.jsx
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Modal, Button } from "react-bootstrap";

const CrmModal = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [selectedCRM, setSelectedCRM] = useState(null);

  useImperativeHandle(ref, () => ({
    open: () => setShow(true),
  }));

  const handleClose = () => setShow(false);
  const handleSelect = (option) => setSelectedCRM(option);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName="border-0"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center fw-bold">
          Select CRM
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex justify-content-center gap-3 border-3">
        {["Salesforce", "MySQL", "Mongo"].map((option) => (
          <Button
            key={option}
            onClick={() => handleSelect(option)}
            variant={selectedCRM === option ? "primary" : "light"}
            className={`flex-fill m-1 px-3 py-2 rounded-3 shadow-sm border ${
              selectedCRM === option ? "text-white" : "text-primary"
            }`}
          >
            {option}
          </Button>
        ))}
      </Modal.Body>
    </Modal>
  );
});

export default CrmModal;
