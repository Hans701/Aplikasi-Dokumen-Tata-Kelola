import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:8080/products');
            if (result.status === 200) {
                setProducts(result.data);
            }else {
                console.log("http request terjadi error");
            }
        }catch (error) {
            console.log("error", error);
            return error;
        }
    }

    // const fetchData = async () => {
    //     const res = await fetch('http://localhost:8080/products');
    //     const json = await res.json();
    //     console.log("response", json);
    //     setProducts(json);
    //}

    useEffect(() => {
        fetchData();
    }, []);

    const deleteProduct = async (id) => {
        try {
            const result = await axios.delete(`http://localhost:8080/products/${id}`);
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
                <Link to={`/products/edit/${params.id}`} className="mr-1">
                    <button class="button is-primary is-small">Edit</button>
                </Link>
                <button class="button is-danger is-small" onClick={() => deleteProduct(params.id)}>Delete</button>
            </div>
        )
    }


  return (
    <div>
        <div className='container'>
            <h1 className='mb-3'>Daftar Produk</h1>
            <div className='mb-3'>
                <Link to="/products/addproduct">
                    <button class="button is-primary">Tambah Produk</button>
                </Link>
            </div>
        </div>
        {/* <ul>
            {
                products.map((value, index) => {
                    return (
                    <li key={index}>
                        {value.title} / {value.price}
                    </li>)
                })}
        </ul> */}
        <table class='table'>
            <thead>
                <tr>
                    <th>
                        <abbr title="Position">No</abbr>
                    </th>
                    <th>
                        <abbr title="Position">Produk</abbr>
                    </th>
                    <th>
                        <abbr title="Position">Harga</abbr>
                    </th>
                    <th>
                        <abbr title="Position">Aksi</abbr>
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{(index +=1)}</td>
                            <td>{value.title}</td>
                            <td>{value.price}</td>
                            <td>{renderAction(value)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Products