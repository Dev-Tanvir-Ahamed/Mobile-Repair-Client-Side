import React from 'react';
import logo from "../../../images/logo-wide.png"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src={logo} className="img-fluid" alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link ms-5 ms-4" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 ms-4" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 ms-4" href="#">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 ms-4" href="#">Expert</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 ms-4" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 ms-4" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      
    );
};

export default Navbar;