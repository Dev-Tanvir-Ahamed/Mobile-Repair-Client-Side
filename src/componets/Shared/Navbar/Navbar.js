import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/logo-wide.png"

const Navbar = () => {
  let [loggedInUser, setLoggedInUser] = useContext(UserContext)
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
            {
                        !loggedInUser.name && <li className="nav-item">
                        <Link className="nav-link btn btn-primary p-2" to="/login">Login</Link>
                        </li>
                    }
                    {
                        loggedInUser.name &&  <li className="nav-item">
                          <Link className="nav-link font-weight-bold p-2" to="/login">{loggedInUser.name} <img className="photo" src={loggedInUser.photo} alt=""/> </Link>
                          </li>
                    }
            <li class="nav-item">
              <a class="nav-link ms-5 ms-4" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      
    );
};

export default Navbar;