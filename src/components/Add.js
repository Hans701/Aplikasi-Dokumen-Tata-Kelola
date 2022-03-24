import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";

const Add = ({ show, handleClose, handleSubmitAplikasi }) => {
  const [apk, setApk] = useState("");

  const saveAplikasi = (e) => {
    e.preventDefault();
    console.log("data berhasil ditambah");
    alert("data berhasil ditambah");

    if (apk === "") {
      alert("nama tidak boleh kosong");
      return false;
    }

    const payload = {
      apk,
    };

    handleSubmitAplikasi(payload);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Add Aplikasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={saveAplikasi}>
            <div class="mb-3">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nama Aplikasi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Text input"
                  onChange={(e) => setApk(e.target.value)}
                  value={apk}
                />
              </Form.Group>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={saveAplikasi}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
