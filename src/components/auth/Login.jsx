import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        className="container  mt-5 sign d-flex justify-content-center align-items-center mb-5 mt-2 text-dark rounded shadow-lg"
        style={{ maxWidth: "700px" }}
      >
        <div className="card sign p-4" style={{ width: "100%" }}>
          <h2 className="mt-5 text-center p-3">Welcome</h2>
          <p className="parag">Enter Your Email to continue </p>
          <form className="p-3 ">
           
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
              <div className="user-box position-relative">
                <input
                  type="password"
                  className="form-control short-input border-0"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <button type="submit" className="btn  fw-bold rounded-pill  reg">
              <Link to='/dashboard' className="fw-bold reg text-decoration-none">Login</Link>
            </button>
            <p className="fw-light text-center">
              Dont Have an account? <span className="fw-bold">  <Link to='/signup' className="fw-bold 
               text-decoration-none text-danger">Sign up</Link></span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
