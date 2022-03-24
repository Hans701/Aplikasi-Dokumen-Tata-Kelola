import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Add from "./Add.js";
import Edit from "./Edit.js";
import Navbar from "./Navbar";
import Upload from "./Upload.js";
import Upload_2 from "./Upload_2";
import Upload_1 from "./Upload_1";
import swal from "sweetalert";
import { Card } from "react-bootstrap";

const Table = () => {
  const [aplikasi, setAplikasi] = useState([]);
  const [apk, setApk] = useState("");
  const [doc1, setDoc1] = useState("");
  const [doc2, setDoc2] = useState("");
  const [doc3, setDoc3] = useState("");
  const [id, setId] = useState();
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

  useEffect(() => {
    fetchDataById();
  }, []);

  const fetchDataById = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8080/aplikasi/${id}`,
        apk
      );
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

  // FUNCTION SUBMIT ADD
  const handleSubmitAplikasi = async (payload) => {
    try {
      const result = await axios.post(
        "http://localhost:8080/aplikasi",
        payload
      );
      if (result.status === 201) {
        // alert("Data berhasil ditambahkan");
        window.location.reload(false);
      } else {
        alert("Data gagal ditambahkan");
      }
    } catch (error) {
      console.log("ada error", error);
      return error;
    }
  };

  // FUNCTION BUTTON DELETE
  const deleteAplikasi = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:8080/aplikasi/${id}`);
      if (result.status === 200) {
        fetchData();
      } else {
      }
    } catch (error) {
      console.log("ada error", error);
      return error;
    }
  };
  const handleClick = (id, dispatch) => {
    swal({
      title: "Anda yakin menghapus data?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteAplikasi(id));
        swal("Data berhasil dihapus!", {
          icon: "success",
        });
        fetchData();
      } else {
        swal("Data gagal dihapus!");
      }
    });
  };

  //BUTTON EDIT & DELETE
  const renderAction = (params) => {
    return (
      <div type="button">
        <Button
          variant="warning"
          size="sm"
          onClick={() => {
            setId(params.id);
            handleShowEdit();
          }}
        >
          <i class="bi bi-pencil-square">Edit</i>
        </Button>{" "}
        <Button
          variant="danger"
          size="sm"
          onClick={handleClick.bind(this, params.id, deleteAplikasi)}
        >
          <i class="bi bi-trash"></i>Delete
        </Button>
      </div>
    );
  };

  //BUTTON UNGGAH FILE
  const renderAction1 = (params) => {
    return (
      <div type="button">
        <button
          className="btn btn-secondary btn-sm btn-center'"
          onClick={handleShowUpload1}
        >
          <i class="bi bi-upload">Unggah</i>
        </button>
      </div>
    );
  };
  const renderAction2 = (params) => {
    return (
      <div type="button">
        <button
          className="btn btn-secondary btn-sm btn-center"
          onClick={handleShowUpload2}
        >
          <i class="bi bi-upload">Unggah</i>
        </button>
      </div>
    );
  };
  const renderAction3 = (params) => {
    return (
      <div type="button">
        <button
          className="btn btn-secondary btn-sm btn-center"
          onClick={handleShowUpload}
        >
          <i class="bi bi-upload">Unggah</i>
        </button>
      </div>
    );
  };

  // Fungsi button Modal ADD
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fungsi button Modal EDIT
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  // Fungsi button Modal DELETE
  const [showDel, setShowDel] = useState(false);
  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  // Fungsi button Modal UNGGAH FILE
  const [props, setUpload] = useState(false);
  const handleCloseUpload = () => setUpload(false);
  const handleShowUpload = () => setUpload(true);
  const [props2, setUpload2] = useState(false);
  const handleCloseUpload2 = () => setUpload2(false);
  const handleShowUpload2 = () => setUpload2(true);
  const [props1, setUpload1] = useState(false);
  const handleCloseUpload1 = () => setUpload1(false);
  const handleShowUpload1 = () => setUpload1(true);

  return (
    <div className="bg-secondary h-100">
      <Navbar />
      <div className="container-fluid vh-100">
        <br />
        <Card>
          <Card.Body>
            {/* Fungsi Memanggil Component ADD */}
            <Add
              show={show}
              handleClose={handleClose}
              handleSubmitAplikasi={handleSubmitAplikasi}
            />
            {/* Fungsi Memanggil Component EDIT */}
            <Edit
              showEdit={showEdit}
              handleCloseEdit={handleCloseEdit}
              id={id}
            />
            {/* Fungsi Memanggil Component Upload File */}
            <Upload props={props} handleCloseUpload={handleCloseUpload} />
            <Upload_2 props2={props2} handleCloseUpload2={handleCloseUpload2} />
            <Upload_1 props1={props1} handleCloseUpload1={handleCloseUpload1} />

            <div className="container">
              <br />
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-end">
                {/* Button ADD */}
                <Button variant="primary" onClick={handleShow}>
                  <i class="bi bi-plus">Add</i>
                </Button>
                <div className="vr" />
                <Button className="btn btn-primary btn-sm">Add Column</Button>
                <br />
              </div>
              <br />
              {/* TABEL */}
              <table class="table table-bordered table-hover border-secondary">
                <thead class="table-dark">
                  <tr>
                    <th scope="col" class="text-center">
                      No.
                    </th>
                    <th scope="col" class="text-center">
                      Nama Aplikasi
                    </th>
                    <th scope="col" class="text-center">
                      Dokumen UAT
                    </th>
                    <th scope="col" class="text-center">
                      Dokumen User Manual
                    </th>
                    <th scope="col" class="text-center">
                      Dokumen Manual Instalasi
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {aplikasi.map((value, index) => {
                    return (
                      <tr key={index}>
                        <th class="table-secondary text-center" scope="row">
                          {(index += 1)}
                        </th>
                        <td class="table-light">
                          {value.apk}
                          <p>{renderAction(value)}</p>
                        </td>
                        <td class="table-light text-center">
                          {value.doc1}
                          <p>{renderAction1(value)}</p>
                        </td>
                        <td class="table-light text-center">
                          {value.doc2}
                          <p>{renderAction2(value)}</p>
                        </td>
                        <td class="table-light text-center">
                          {value.doc3}
                          <p>{renderAction3(value)}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Table;
