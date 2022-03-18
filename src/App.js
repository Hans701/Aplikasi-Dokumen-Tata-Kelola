// import React, { useState, useEffect } from "react";
import Header from "./Header";
// import Body from "./Body";
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Mahasiswa from "./Mahasiswa";
import AddMahasiswa from "./AddMahasiswa";
import EditMahasiswa from "./EditMahasiswa";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function App() {
//   const [nama, setNama] = useState("Hans");

//   const [productList, setProductlist] = useState ([
//     {
//         nama: "Produk 1",
//         price: "30",
//     },
//     {
//         nama: "Produk 2",
//         price: "40",
//     },
//     {
//         nama: "Produk 3",
//         price: "50",
//     },
//     {
//         nama: "Produk 4",
//         price: "60",
//     },
//     {
//         nama: "Produk 5",
//         price: "70",
//     },
//     {
//         nama: "Produk 6",
//         price: "80",
//     },
//     {
//         nama: "Produk 7",
//         price: "90",
//     },
// ])

  // const deleteProduct = (productId) => {
  //   const coppyData = [...productList];
  //   coppyData.splice(productId, 1);
  //   setProductlist(coppyData);  
  // }

  // const changeName = () => {
  //   setNama("Nama di ganti");
  // }

  // useEffect(() => {
  //   console.log("render pertama")
  // }, []);
  // useEffect(() => {
  //   console.log("render pertama")
  // }, [nama, productList]); 
  // useEffect(() => {
  //   console.log("render pertama")
  // }, []);
  
  return (
    <div className="App">
      {/* <Header propsName={nama} propsChangeName={changeName}/>
      <Body productList={productList} deleteProduct={deleteProduct}/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Header/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/mahasiswa/addmahasiswa" element={<AddMahasiswa />} />
          <Route path="/mahasiswa/edit/:id" exact element={<EditMahasiswa />} />
          <Route path="/products/addproduct" element={<AddProduct />} />
          <Route path="/products/edit/:id" exact element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
