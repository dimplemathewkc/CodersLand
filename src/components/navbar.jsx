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
      <a class="nav-link"><i>Jane Doe</i></a>
    </li>
    <li class="nav-item">
      {/* <div className="card" style={{height:"40px", width:"50px"}}>
        <img className="" style={{ width:"100%", height:"100%"}} src="https://www.headshotsprague.com/wp-content/uploads/2019/08/Emotional-headshot-of-aspiring-actress-on-white-background-made-by-Headshots-Prague-1.jpg"></img>
      </div> */}
    </li>
  </ul>
                </div>
                </nav> );
}
 
export default Navbar;