import  { Component } from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";
class Navbar extends Component {
    state = {  } 
    scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    render() { 
        return (

            <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="/images/Sportique..svg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav w-75 justify-content-center flex-grow-1 pe-3 fs-5 gap-5">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href=""  onClick={() => this.scrollToSection("hero")}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  onClick={() => this.scrollToSection("Categories")}>Categories</a>
          </li>
          <li className="nav-item ">
          <a className="nav-link" href="#" onClick={() => this.scrollToSection("brands")}>Brands</a></li>
            
            <li>
            <a className="nav-link" href="#" onClick={() => this.scrollToSection("sale")}>Onsale</a>

          </li>
        </ul>
        <div className="navIcons d-flex justify-content-center align-items-center gap-3 me-5">
            <li className="nav-item dropdown">
          <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="/images/mdi_user-circle.svg" className='img-fluid' alt="" />
          </a>
          <ul className="dropdown-menu ">
            <li><Link to="/login" className="dropdown-item">Login</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
        <img src="/images/mdi_shopping-cart.svg" className='img-fluid' alt="" />

        </div>

      </div>
    </div>
  </div>
</nav>
        
        );
    }
}

export default Navbar;