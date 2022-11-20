import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {

  

  return (
    <>
      <div className="container">
        <div className="col-md-8 d-flex flex-column mt-5 justify-content-start">
          <h1>Finding Difficulties.?</h1>
          <h3>Contact Us Now!</h3>
          <hr />
        </div>
        <div className="container d-flex flex-row justify-content-start">
          <div className="row">
            <div className="col-md-10 d-flex">
              <img src="/assets/contact.jpg" alt="contactImg" width="750px" />
            </div>
          </div>

          <div className="col-md-4 mt-2 about_image">
            <form>
              <div class="mb-3">
                <div className="mt-2">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="jhon doe"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="mt-2">
                  <label for="exampleFormControlInput1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="***********"
                    required
                  />
                </div>

                <div className="mt-2">
                  <label for="exampleFormControlInput1" class="form-label">
                    Mobile
                  </label>
                  <input
                    type="number"
                    class="form-control text-secondary"
                    id="exampleFormControlInput1"
                    placeholder="+91 12345 45678"
                    required
                  />
                </div>

                <div className="mt-5">
                  <Link className="btn btn-outline-info ms-2" to="/product">
                    <i class="fa fa-gift m-2" aria-hidden="true"></i>
                    See Products
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
