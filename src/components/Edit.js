import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

const Edit = ({ showEdit, handleCloseEdit, id }) => { 
  const [aplikasi, setAplikasi] = useState([]);
  const [apk, setApk] = useState("");
  // console.log({id});
  useEffect(() => {
    fetchDataById(id);
  }, [id]);

  const fetchDataById = async (id) => {
    try {
      const result = await axios.get(`http://localhost:8080/aplikasi/${id}`);
      console.log({result});
      if (result.status === 200) {
        setApk(result.data.apk);
      } else {
        alert("Data gagal diedit");
      }
    } catch (error) {
      console.log("ada error", error);
      return error;
    }
  };

  const handleEditAplikasi = async (payload, id) => {
    try {
      const result = await axios.put(
        `http://localhost:8080/aplikasi/${id}`,
        payload
      );
      if (result.status === 200) {
        alert("Data berhasil diedit");
        window.location.reload(false);
       
      } else {
        alert("Data gagal diedit");
      }
      console.log(result);
    } catch (error) {
      console.log("ada error", error);
      return error;
    }
  };

  const editAplikasi = async (e) => {
    console.log({});
    e.preventDefault();
    console.log('data tersimpan');
    if (apk === '') {
      alert('nama tidak boleh kosong');
      return false;
    }
    const payload = {
      apk
    };

    handleEditAplikasi(payload, id);
  };

  return (
    <div>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Form Edit Aplikasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={editAplikasi}>
            <div class="mb-3">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nama Aplikasi</Form.Label>
                <Form.Control
                  type="hidden" 
                  name='id'
                  value={id}
                />
                <Form.Control
                  type="text"
                  placeholder="Text input"
                   name='apk'
                  onChange={(e) => setApk(e.target.value)}
                  value={apk}
                />
              </Form.Group>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" type="submit" onClick={editAplikasi}>
            Edit
          </Button>
          <Button variant="secondary" onClick={handleCloseEdit} type='button'>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;
