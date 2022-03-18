import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const Mahasiswa = () => {
    const [mahasiswa, setMahasiswa] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:8081/mahasiswa');
            if (result.status === 200) {
                setMahasiswa(result.data);
            }else {
                console.log("http request terjadi error");
            }
        }catch (error) {
            console.log("error", error);
            return error;
        }
    }
    
    // const fetchData = async () => {
    //     const res = await fetch('http://localhost:8081/mahasiswa');
    //     const json = await res.json();
    //     console.log("response", json);
    //     setMahasiswa(json);
    //}

    useEffect(() => {
        fetchData();
    }, []);

    const deleteMahasiswa = async (id) => {
        try {
            const result = await axios.delete(`http://localhost:8081/mahasiswa/${id}`);
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
    }

    const renderAction = (params) => {
        return (
            <div className="button">
                <Link to={`/mahasiswa/edit/${params.id}`} className="mr-1">
                    <button class="button is-primary is-small">Edit</button>
                </Link>
                <button class="button is-danger is-small" onClick={() => deleteMahasiswa(params.id)}>Delete</button>
                
            </div>
        )
    }

  return (
    <div>
        <div className='container'>
            <h1 className='mb-3'>Daftar Mahasiswa</h1>
            <div className='mb-3'>
                <Link to="/mahasiswa/addmahasiswa">
                    <button class="button is-primary">Tambah Mahasiswa</button>
                </Link>
            </div>
        </div>
        
        {/* <ul>
            {
                mahasiswa.map((value, index) => {
                    return (
                    <li key={index}>
                        {value.id} / {value.nama} /{value.nim} / {value.jurusan}
                    </li>)
                })}
        </ul>    */}
        <table class='table is-bordered is-hoverable'>
            <thead>
                <tr>
                    <th>
                        <abbr title="Position">No</abbr>
                    </th>
                    <th>
                        <abbr title="Position">ID</abbr>
                    </th>
                    <th>
                        <abbr title="Position">Nama</abbr>
                    </th>
                    <th>
                        <abbr title="Position">NIM</abbr>
                    </th>
                    <th>
                        <abbr title="Position">Jurusan</abbr>
                    </th>
                    <th>
                        <abbr title="Position">Aksi</abbr>
                    </th>
                </tr>
            </thead>
            <tbody>
                {mahasiswa.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{(index +=1)}</td>
                            <td>{value.id}</td>
                            <td>{value.nama}</td>
                            <td>{value.nim}</td>
                            <td>{value.jurusan}</td>
                            <td>{renderAction(value)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}


export default Mahasiswa