import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div
        className="container mt-5 sign d-flex justify-content-center align-items-center mb-5 mt-2 text-dark rounded shadow-lg"
        style={{ maxWidth: "700px" }}
      >
        <div className="card sign p-4" style={{ width: "100%" }}>
          <h2 className="mt-5 text-center p-3">Get Started</h2>
          <p className="parag">Create an account to Register keke Riders</p>
          <form className="p-3 ">
          <div className="mb-3">
              <input
                type="Full Name"
                className="form-control short-input  border-0"
                id="Full Name"
                name="Full Name"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <div className="user-box position-relative">
                <input
                  type="Phone Number"
                  className="form-control short-input border-0"
                  id="Phone Number"
                  name="Phone Number"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control short-input  border-0"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
            <div className="mb-3">
              <input
                type="password"
                className="form-control short-input  border-0"
                id="password"
                name="password"
                placeholder="password"
              />
            </div>
            </div>
            <button type="submit" className="btn fw-bold rounded-pill  reg">
              <Link to='/dashboard' className="fw-bold text-white text-decoration-none">Signup</Link>
            </button>
            <p className="fw-light text-center">
              Already Have an account? <span className="fw-bold">  <Link to='/login' className="fw-bold 
               text-decoration-none text-danger">Login</Link></span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
