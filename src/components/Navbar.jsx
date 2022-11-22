import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";

export default function Navbar() {

  const state = useSelector((state)=> state.handleCart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3 px-5">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-1" to="/">
            WAGON
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>



       

            <div className="button_nav">
          
            <Login/>
            <Register/>
              <Link to="/" className="btn btn-outline-dark ms-2 m-2">
                <i className="fa fa-shopping-bag me-1" aria-hidden="true"></i>
                Cart ({state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
