import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate , Link } from 'react-router-dom';

const EditMahasiswa = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");
    const [jurusan, setJurusan] = useState("");
    useEffect (() => {
        fetchDataById ()
    }, [])

    const fetchDataById = async () => {
        try {
            const result = await axios.get(`http://localhost:8081/mahasiswa/${id}`);
            if (result.status === 200) {
                setNim(result.data.nim);
                setNama(result.data.nama);
                setJurusan(result.data.jurusan);
            } else {
                alert("Data gagal diedit");
            }
        } catch (error) {
            console.log("ada error",error);
            return error;
        }
    }

    const handleSubmitMahasiswa = async (payload) => {
        try {
            const result = await axios.put(`http://localhost:8081/mahasiswa/${id}`, payload);
            if (result.status === 200) {
                alert("Data berhasil tersimpan");
                navigate('/mahasiswa');
            } else {
                alert("Data gagal tersimpan");
            }
        } catch (error) {
            console.log("ada error",error);
            return error;
        }
    }
    
    const saveMahasiswa = (e) => {
        e.preventDefault();
        console.log("data tersimpan");
        if (nim === "") {
            alert("nama tidak boleh kosong");
        } else if (nama === "") {
            alert("nim tidak boleh kosong");
        } else if (jurusan === "") {
            alert("jurusan tidak boleh kosong");
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
        <form onSubmit={saveMahasiswa}>
        <Link to='/mahasiswa'>
            <button className='button is-success is-small'>
                Kembali
            </button>
        </Link>

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

export default EditMahasiswa
