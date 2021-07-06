import React from 'react';
import logo from '../logo.png';
const Navbar = () => {
    return ( <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
                <div className="container-fluid">
                    <a className="" href="#"> <img src={logo} style={{height:"70px",position: "absolute", zIndex: 1, top: "-2px"}} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <button className="btn btn-sm"> 
                        <a className="nav-link" href='/login'>Login</a>   
                      </button>
                    </li>
                    <li class="nav-item">
                      
                    </li>
                  </ul>
                </div>
                </nav> );
}
 
export default Navbar;