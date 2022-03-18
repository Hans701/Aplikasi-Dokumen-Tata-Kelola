import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddMahasiswa = () => {

    const Navigate = useNavigate();
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");
    const [jurusan, setJurusan] = useState("");
    const handleSubmitMahasiswa = async (payload) => {
        try {
            const result = await axios.post('http://localhost:8081/mahasiswa', payload);
            if (result.status === 201) {
                alert("Data berhasil ditambahkan");
                Navigate('/mahasiswa');
            } else {
                alert("Data gagal ditambahkan");
            }
        } catch (error) {
            console.log("ada error",error);
            return error;
        }
    }
    
    const saveMahasiswa = (e) => {
        e.preventDefault();

        if (nim === "") {
            alert("nama tidak boleh kosong");
            return false;
        } else if (nama === "") {
            alert("nim tidak boleh kosong");
            return false;
        } else if (jurusan === "") {
            alert("jurusan tidak boleh kosong");
            return false;
        }

        const payload = {
            nim,
            nama,
            jurusan,
        }

        handleSubmitMahasiswa(payload);
    }
    
    const resetForm = () => {
        setNim("");
        setNama("");
        setJurusan("");
    }

  return (
    <div className='container'>
        <h1 className='mb-3'>Form Pendaftaran</h1>
        <Link to='/mahasiswa'>
            <button className='button is-success is-small'>
                Kembali
            </button>
        </Link>
        <form onSubmit={saveMahasiswa}>

            <div class="field">
                <label class="label">NIM</label>
                <div class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-success" 
                        type="text" 
                        placeholder="Text input" 
                        onChange={(e) => setNim(e.target.value)}
                        value={nim}>
                    </input>
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This NIM is available</p>
            </div>

            <div class="fled">
                <label class="label">Nama</label>
                <div class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-success" 
                        type="text" 
                        placeholder="Text input" 
                        onChange={(e) => setNama(e.target.value)}
                        value={nama}>
                    </input>
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This Nama is available</p>
            </div>

            <div class="fled">
                <label class="label">Jurusan</label>
                <div class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-success" 
                        type="text" 
                        placeholder="Text input" 
                        onChange={(e) => setJurusan(e.target.value)}
                        value={jurusan}>
                    </input>
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This Jurusan is available</p>
            </div>
            <div class='button'>
                <button class='button is-primary' type='submit'>Submit</button>
                <button class='button is-danger' onClick={resetForm} type='button'>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default AddMahasiswa
