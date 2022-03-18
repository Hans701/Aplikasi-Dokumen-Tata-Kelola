import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Header = (props) => {
    const {propsName, propsChangeName} = props; //menangkap props cara 1
    const [title, setTitle] = useState("Materi H 2");

    const changTitle = (paramName) => {
        setTitle(paramName);

    };
  return (
      <div>
          <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar">
                    <nav className='navbar is-primary'>
                        <a class = "navbar-item" href = "/about">About Page</a>
                        <a class = "navbar-item" href = "/contact">Contact Page</a>
                        <a class = "navbar-item" href = "/products">Product Page</a>
                        <a class = "navbar-item" href = "/mahasiswa">Mahasiswa Page</a>
                    </nav>
                </div>
            </nav>
            <p><h1>{title}</h1></p>
            <p><h1>{propsName}</h1></p>
            <button onClick={()=>changTitle("Materi h 3")} className="button is-danger"
                >Ganti Judul
            </button>
            <button onClick={propsChangeName} className="button is-primary">Ganti Judul</button>
            
            {/* <br />
            <Link to='about'>About Page</Link>
            <br />
            <Link to='contact'>Contact Page</Link>
            <br />
            <Link to='products'>Product Page</Link>
            <br />
            <Link to='mahasiswa'>Mahasiswa Page</Link> */}
      </div>
    
  );
  
};

export default Header;