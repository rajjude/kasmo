// src/components/DatabasePopup.js
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ConfigDBDD = ({ show, handleClose }) => {
  const [selectedDB, setSelectedDB] = useState(() => {
    return localStorage.getItem("selectedDB") || null;
  });

  const dbOptions = [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Oracle",
    "SQL Server",
    "SQLite",
  ];

  const handleSelect = (db) => {
    setSelectedDB(db);
    localStorage.setItem("selectedDB", db);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="modal-content rounded-4">
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center fw-bold">
            Select a Database
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-wrap justify-content-center gap-3 py-4 border-3">
          {dbOptions.map((db) => (
            <Button
              key={db}
              onClick={() => handleSelect(db)}
              variant={selectedDB === db ? "primary" : "light"}
              className={`flex-fill m-1 px-3 py-2 rounded-3 shadow-sm border ${
                selectedDB === db ? "text-white" : "text-primary"
              }`}
            >
              {db}
            </Button>
          ))}
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ConfigDBDD;
