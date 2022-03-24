import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand navbar-dark nav">
        <div class="container-fluid">
            <a class="navbar-item">
              <img src={Logo} className='py-2 px-2' style={{maxHeight:"75px"}}/>
            </a>
              <a class="navbar-brand">
                TATA KELOLA PENGEMBANGAN APLIKASI
              </a>
        </div> 
    </nav>
    
  )
}

export default Navbar