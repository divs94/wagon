import React from "react";
import Products from "./Products";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div classNameName="hero">
        <div className="card bg-dark text-dark border-0">
          <img
            src="/assets/background.png"
            className="background_img"
            alt="heroImg"
            height="auto"
          />

          <div className="card-img-overlay d-flex flex-column justify-content-center ">

            <div className="container-fluid">
            <p className="card-text  display-6 lead fw-regular mt-5 mb-3">
                <em>Wagon Presents..</em>
              </p>
              <h5 className="card-title display-1 fw-bolder mb-3 mt-3">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text display-4 lead fw-regular">
                Check Out New Trends...
              </p>
              <Link className="btn btn-outline-dark ms-2" to="/product">
              <i class="fa fa-gift m-2" aria-hidden="true"></i>
                  See Products
                </Link>
             
             
            </div>
          </div>
        </div>
      </div>
      {/* <Products/> */}
    </>
  );
}
