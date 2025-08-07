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
            variant={selectedCRM === option ? "info" : "outline-info"}
            onClick={() => handleSelect(option)}
            className="px-4 py-2 crm-button"
          >
            {option}
          </Button>
        ))}
      </Modal.Body>
    </Modal>
  );
});

export default CrmModal;
