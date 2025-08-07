import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaSnowflake } from "react-icons/fa";

const SnowflakeLoginModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    account: "",
    user: "",
    password: "",
    database: "",
    schema: "",
    warehouse: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    console.log("Login payload:", formData);
    // Add login logic here
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="md"
      contentClassName="rounded-4"
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 d-flex justify-content-center align-items-center gap-2 fw-bold text-primary">
          <FaSnowflake />
          Snowflake Login
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="d-flex flex-column gap-3">
          {[
            "account",
            "user",
            "password",
            "database",
            "schema",
            "warehouse",
            "role",
          ].map((field) => (
            <Form.Group key={field}>
              <Form.Label className="text-capitalize">{field}</Form.Label>
              <Form.Control
                type={field === "password" ? "password" : "text"}
                placeholder={`Enter ${field}`}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>

      <Modal.Footer className="justify-content-center">
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SnowflakeLoginModal;
