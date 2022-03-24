import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Upload = ({ props, handleCloseUpload }) => {
  const { id } = useParams();
  const [doc3, setDoc3] = useState("");

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const onSubmit = async e => { 
    e.preventDefault();
    let data = new FormData();
    console.log(doc3 + '' + 'this is image pathname')
    data.append('doc3', doc3)

      axios.post('/', data)
     .then(res => {
        console.log(res.data + 'this is data after api call');
        alert("file berhasil di upload");
     })
     .catch(err => console.log(err));
  };

  
  

  return (
    <Modal show={props} onHide={handleCloseUpload}>
      <Modal.Header closeButton>
        <Modal.Title>Add Document</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="container" onSubmit={e => onSubmit(e)}>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop or click to select files here</p>
          </div>
          <aside>
            <h6>Files</h6>
            <ul>{files}</ul>
          </aside>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleCloseUpload}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Upload;
