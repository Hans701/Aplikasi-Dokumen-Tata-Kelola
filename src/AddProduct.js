import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const Navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");;
    const handleSubmitProduct = async (payload) => {
        try {
            const result = await axios.post('http://localhost:8080/products', payload);
            if (result.status === 201) {
                alert("Data berhasil ditambahkan");
                Navigate('/products');
            } else {
                alert("Data gagal ditambahkan");
            }
        } catch (error) {
            console.log("ada error",error);
            return error;
        }
    }
    
    const saveProduct = (e) => {
        e.preventDefault();

        if (title === "") {
            alert("nama tidak boleh kosong");
            return false;
        } else if (price === "") {
            alert("nim tidak boleh kosong");
            return false;
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
        <h1 className='mb-3'>Form Penambahan Product</h1>
        <Link to='/products'>
            <button className='button is-success is-small'>
                Kembali
            </button>
        </Link>
        <form onSubmit={saveProduct}>

            <div class="field">
                <label class="label">Nama Product</label>
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

            <div class="field">
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

export default AddProduct
