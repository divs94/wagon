import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="container d-flex flex-row justify-content-center mt-5 pt-5">
        <div className="row">
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h1>About Us</h1>
            <p className="lead">
              Wagon is guided by four principles: customer obsession rather than
              competitor focus, passion for invention, commitment to operational
              excellence, and long-term thinking. Wagon strives to be Earth’s
              most customer-centric company, Earth’s best employer, and Earth’s
              safest place to work.
            </p>

            <p className="lead">
              Wagon is guided by four principles: customer obsession rather than
              competitor focus, passion for invention, commitment to operational
              excellence, and long-term thinking. Wagon strives to be Earth’s
              most customer-centric company, Earth’s best employer, and Earth’s
              safest place to work.
            </p>
            <NavLink
              to="/contact"
              className="btn btn-outline-dark text-center mt-2 display-6"
              style={{ width: "400px", height: "50px" }}
            >
            
              <i class="fa fa-envelope me-2" aria-hidden="true"></i>
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="col-md-4 mt-2 about_image">
          <img src="/assets/about2.jpg" className="ms-2 mt-2" width="400px" height="250px" alt="" />
          <img src="/assets/about21.webp" className="ms-5 mt-2" width="450px" height="200px" alt="" />
          <img src="/assets/about.jpg" className="me-4 mt-2" width="350px" height="200px" alt="" />
        </div>
      </div>
    </>
  );
}
