import React, { useState } from "react";
import { Modal, Button, Form, ModalFooter } from "react-bootstrap";

const ConnectToDB = ({ show, handleClose }) => {
  const [dbType, setDbType] = useState("");
  const [table, setTable] = useState("");

  const handleConnect = () => {
    handleClose();
  };
  const handleSubmit = (e) => {};

  const dbOptions = [
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "Teradata",
    "Redshift",
    "Greenplum",
  ];
  const tableOptions = ["Customers", "Orders", "Products", "Transactions"];

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title>
          <b>Connect to Database</b>
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="border-0">
          <div className="mb-3">
            <h6 className="fw-bold text-primary">Select Database Type:</h6>

            <div className="d-flex justify-content-between flex-wrap gap-2">
              {dbOptions.map((db) => (
                <Button
                  key={db}
                  onClick={() => setDbType(db)}
                  variant={dbType === db ? "primary" : "light"}
                  className={`flex-fill m-1 px-3 py-2 rounded-3 shadow-sm border ${
                    dbType === db ? "text-white" : "text-primary"
                  }`}
                >
                  {db}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <h6 className="fw-bold text-primary">Select Table to Load:</h6>
            <Form.Select
              value={table}
              onChange={(e) => setTable(e.target.value)}
              required
            >
              <option value="">-- Choose a Table --</option>
              {tableOptions.map((tbl) => (
                <option key={tbl} value={tbl}>
                  {tbl}
                </option>
              ))}
            </Form.Select>
          </div>
        </Modal.Body>

        <ModalFooter className="border-0">
          <Button variant="primary" type="submit">
            Connect
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default ConnectToDB;
