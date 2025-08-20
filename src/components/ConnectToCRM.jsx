import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ConnectToCrm = ({ show, handleClose }) => {
  const [selectedCRM, setSelectedCRM] = useState("Salesforce");
  const [instance, setInstance] = useState("");
  const [objectName, setObjectName] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      {/* Header with built-in close button */}
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Connect to CRM</Modal.Title>
      </Modal.Header>
      <Modal.Body className="rounded-4 p-4">
        {/* CRM Selection Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          {["Salesforce", "Zoho", "Hubspot"].map((crm) => (
            <Button
              key={crm}
              onClick={() => setSelectedCRM(crm)}
              variant={selectedCRM === crm ? "primary" : "light"}
              className={`flex-fill m-1 px-3 py-2 rounded-3 shadow-sm border ${
                selectedCRM === crm ? "text-white" : "text-primary"
              }`}
            >
              {crm}
            </Button>
          ))}
        </div>

        {/* Instance Dropdown */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-start">
            <Form.Label className="fw-semibold">
              <h6 className="fw-bold text-primary">Salesforce Instance:</h6>
            </Form.Label>
            <Form.Select
              value={instance}
              onChange={(e) => setInstance(e.target.value)}
              required
            >
              <option value="">Select Instance</option>
              <option value="NA1">NA1</option>
              <option value="NA2">NA2</option>
              <option value="EU1">EU1</option>
              <option value="AP1">AP1</option>
            </Form.Select>
          </Form.Group>

          {/* Object Name Input */}
          <Form.Group className="mb-4 text-start">
            <Form.Label className="fw-semibold">
              <h6 className="fw-bold text-primary">Salesforce Object Name:</h6>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Lead, Contact"
              value={objectName}
              onChange={(e) => setObjectName(e.target.value)}
              required
            />
          </Form.Group>

          {/* Action Buttons */}
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="primary"
              className="rounded-3 px-4 py-2 fw-semibold"
              type="submit"
            >
              Connect
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ConnectToCrm;
