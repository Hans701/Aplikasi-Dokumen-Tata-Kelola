import React from 'react'

const Body = (props) => {
    const {productList, deleteProduct} = props;
    
  return (
    <div>
        <h1>ini adalah produk list</h1>
        <p>ini tidak dengan looping</p>
        <ul>
            {/* <li>{productList[0].name}</li>
            <li>{productList[0].name}</li>
            <li>{productList[0].name}</li>
            <li>{productList[0].name}</li>
            <li>{productList[0].name}</li>
            <li>{productList[0].name}</li>
            <li>{productList[0].name}</li> */}
        </ul>
    <div>
        <h1>Ini adalah product list</h1>
        <ul>
            {productList.map((item, index) => {
                //console.log("item", item.nama, index)
                return ( <li key={index}>{item.nama} / {item.price}
                <button onClick={() => deleteProduct(index)}>detele me</button></li> )
            })}
        </ul>
    </div>
    </div>
  )
}

export default Body;