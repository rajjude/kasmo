import { Modal, Button, Form } from "react-bootstrap";

function Upload({ show, handleClose }) {
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {};

  const handleUpload = () => {};

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>📂 Upload Files</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Drag & Drop Zone */}
          <div
            style={{
              border: "2px dashed #007bff",
              padding: "30px",
              textAlign: "center",
              marginBottom: "20px",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#007bff",
              fontWeight: "bold",
            }}
            onClick={() => document.getElementById("fileInput").click()}
          >
            Drag and drop files here or click to upload (Max 1 GB)
            <input
              id="fileInput"
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

          {/* Dropdown for file selection */}
          <h6 className="text-center">Load Files to Snowflake</h6>
          <Form.Select onChange={handleFileChange}>
            <option>-- Select a file --</option>
            <option value="file1.csv">file1.csv</option>
            <option value="file2.csv">file2.csv</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleUpload}
            style={{ width: "100%" }}
          >
            Load
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Upload;
