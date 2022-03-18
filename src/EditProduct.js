import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditProduct = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    useEffect (() => {
        fetchDataById ()
    }, [])

    const fetchDataById = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/products/${id}`);
            if (result.status === 200) {
                setTitle(result.data.title);
                setPrice(result.data.price);
            } else {
                alert("Data gagal diedit");
            }
        } catch (error) {
            console.log("ada error",error);
            return error;
        }
    }

    const handleSubmitProduct = async (payload) => {
        try {
            const result = await axios.put(`http://localhost:8080/products/${id}`, payload);
            if (result.status === 200) {
                alert("Data berhasil tersimpan");
                navigate('/products');
            } else {
                alert("Data gagal tersimpan");
            }
        } catch (error) {
            console.log("ada error",error);
            return error;
        }
    }
    
    const saveProduct = (e) => {
        e.preventDefault();
        console.log("data tersimpan");
        if (title === "") {
            alert("nama tidak boleh kosong");
        } else if (price === "") {
            alert("nim tidak boleh kosong");
        }

        const payload = {
            title,
            price,
        }

        handleSubmitProduct(payload);
    }

    const resetForm = () => {
        setTitle("");
        setPrice("");
    }

  return (
    <div className='container'>
        <h1 className='mb-3'>Form Pendaftaran</h1>
        <form onSubmit={saveProduct}>
        <Link to='/mahasiswa'>
            <button className='button is-success is-small'>
                Kembali
            </button>
        </Link>
            <div class="field">
                <label class="label">Nama Produk</label>
                <div class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-success" 
                        type="text" 
                        placeholder="Text input"
                        onChange={(e) => setTitle(e.target.value)} 
                        value={title}>
                    </input>
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This Product is available</p>
            </div>

            <div class="fled">
                <label class="label">Harga</label>
                <div class="control has-icons-left has-icons-right">
                    <input 
                        class="input is-success" 
                        type="text" 
                        placeholder="Text input" 
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}>
                    </input>
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success"></p>
            </div>
            
            <div class='button'>
                <button class='button is-primary' type='submit'>Submit</button>
                <button class='button is-danger' onClick={resetForm} type='button'>Reset</button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct
