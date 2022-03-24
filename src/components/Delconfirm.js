import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Delconfirm = ({ showDel, handleCloseDel }) => {
  const [aplikasi, setAplikasi] = useState([]);
  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8080/aplikasi");
      if (result.status === 200) {
        setAplikasi(result.data);
      } else {
        console.log("http request terjadi error");
      }
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteAplikasi = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:8080/aplikasi/${id}`);
      if (result.status === 200) {
        alert("Data berhasil dihapus");
        fetchData();
      } else {
        alert("Data gagal dihapus");
      }
    } catch (error) {
      console.log("ada error", error);
      return error;
    }
  };
  const renderAction = (params) => {
    return (
      <div type="button">
        <Button variant="danger" onClick={() => deleteAplikasi(params.id)}>
          Delete
        </Button>
        {"  "}
        <Button variant="secondary" onClick={handleCloseDel}>
          Cancel
        </Button>
      </div>
    );
  };
  return (
    <Modal show={showDel} onHide={handleCloseDel}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="mb-3">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <p>
                  <h1>Anda yakin ingin menghapus data ini?</h1>
                </p>
              </Form.Label>
            </Form.Group>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <p>{renderAction()}</p>
      </Modal.Footer>
    </Modal>
  );
};

export default Delconfirm;
