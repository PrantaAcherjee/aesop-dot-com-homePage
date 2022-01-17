import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (       
       <div>
            <nav class="navbar navbar-expand-lg navbar-light nav-bg">
        <div class="container-fluid">
           
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto menu-style">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Skin Care</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Body & Hand</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Hair</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Fragrance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Kits & Travel</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Gifts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Read</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Stores</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active">
              <i class="fas fa-search"></i>
              </a>            
              </li>              
            </ul>
            <form class="d-flex mx-4">     
                <small className='right-menu'>Login</small>
                <small className='right-menu'>Cart</small>            
            </form>
          </div>
        </div>
      </nav>
       </div>
    );
};

export default Navbar;