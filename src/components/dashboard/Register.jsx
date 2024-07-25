import React, { useState } from "react";
import Users from "../navs/Users";
  const Register = () => {
  const [currentModal, setCurrentModal] = useState(0);

  const handleNext = () => {
    setCurrentModal(currentModal + 1);
  };

  const handleBack = () => {
    setCurrentModal(currentModal - 1);
  };

  const handleClose = () => {
    setCurrentModal(0);
  };
   
  return (
    <>
      <button
        type="button"
        className="btn border-0 register rounded fw-bolder p-2 shadow-sm me-3"
        data-bs-toggle="modal"
        data-bs-target="  #registerModal"
        data-bs-whatever="@fat"
        onClick={() => setCurrentModal(1)}
      >
        Register Driver
      </button>

      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content rounded-0 border-0 shadow-lg"
            style={{ backgroundColor: "white" }}
          >
        <Users/>
            <div className="modal-body">
              {currentModal === 1 && (
                <div>
                  <div className="container text-center d-flex justify-content-between align-items-center p-5">
                    <div className="btn rounded text-white bg-black d-flex align-items-center">
                      Basic Information
                      <span
                        className="rounded-circle bg-white text-black text-center fw-bold ms-2 d-flex justify-content-center align-items-center"
                        style={{ width: "24px", height: "24px" }}
                      >
                        1
                      </span>
                    </div>
                    <p className="text-center mb-0">
                      Keke Tricycle information 2
                    </p>
                    <p className="text-center mb-0">
                      Driver License information 3
                    </p>
                  </div>
                  <form>
                    <div className="mb-3">
                      <p className="fw-bold fs-4">Drivers Basic Information</p>
                      <input
                        type="text"
                        className="form-control long-input"
                        id="Full Name"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control long-input"
                        id="Phone Number"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control long-input"
                        id="Email Address"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mb-3 row">
                      <div className="col-6">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label="Large select example"
                        >
                          <option defaultValue>State of Residence</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 text-center text-area">
                      <textarea
                        className="form-control p-5 centered-textarea mx-auto"
                        id="additionalInfo"
                        rows="3"
                        placeholder="Upload Driver photo"
                      ></textarea>
                    </div>
                  </form>
                </div>
              )}
              {currentModal === 2 && (
                <div>
                  <div className="container text-center d-flex justify-content-between align-items-center p-5">
                    <p className="text-center mb-0">Basic Information</p>
                    <div className="btn rounded text-white bg-black d-flex align-items-center">
                      Keke Tricycle information
                      <span
                        className="rounded-circle bg-white text-black text-center fw-bold ms-2 d-flex justify-content-center align-items-center"
                        style={{ width: "24px", height: "24px" }}
                      >
                        2
                      </span>
                    </div>
                    <p className="text-center mb-0">
                      Driver License information 3
                    </p>
                  </div>
                  <form>
                    <div className="mb-3">
                      <p className="fw-bold fs-4">Keke Tricycle Information</p>
                      <div className="mb-3 row ">
                        <div className="mb-3 row d-flex ">
                          <div className="col-6 d-flex">
                            <div className=" flex-fill me-5">
                              <select
                                className="form-select form-select-lg mb-3"
                                aria-label="Large select example"
                              >
                                <option defaultValue>State of Residence</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <div className="flex-fill">
                              <select
                                className="form-select form-select-lg mb-3"
                                aria-label="Large select example"
                              >
                                <option defaultValue>State of Residence</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control long-input"
                        id="Plate Number"
                        placeholder="Plate Number"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control long-input"
                        id="Chassis_Number"
                        placeholder="Chassis Number"
                      />
                    </div>
                  </form>
                </div>
              )}
              {currentModal === 3 && (
                <div>
                  <div className="container text-center d-flex justify-content-between align-items-center p-5">
                    <p className="text-center mb-0">Basic Information</p>
                    <p className="text-center mb-0">
                      Keke Tricycle information 2
                    </p>
                    <div className="btn rounded text-white bg-black d-flex align-items-center">
                      Driver License information 3
                      <span
                        className="rounded-circle bg-white text-black text-center fw-bold ms-2 d-flex justify-content-center align-items-center"
                        style={{ width: "24px", height: "24px" }}
                      >
                        3
                      </span>
                    </div>
                  </div>
                  <form>
                    <div className="mb-3">
                      <p className="fw-bold fs-4">Driver License Information</p>
                      <input
                        type="text"
                        className="form-control long-input"
                        id="driverLicense"
                        placeholder="Driver License Number"
                        style={{
                          width: "100%",
                          border: "none",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>
                    <div className="mb-3 row">
                      <div className="col-6">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label="Large select example"
                          style={{
                            width: "100%",
                            border: "none",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          }}
                        >
                          <option defaultValue>Date of Issuance</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label="Large select example"
                          style={{
                            width: "100%",
                            border: "none",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          }}
                        >
                          <option defaultValue>Expiration Date</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 text-center text-area">
                      <textarea
                        className="form-control centered-textarea mx-auto"
                        id="additionalInfo"
                        rows="3"
                        placeholder="Upload photo of Driver License"
                        style={{
                          width: "100%",
                          border: "none",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      ></textarea>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <div className="modal-footer">
              {currentModal > 1 && (
                <button
                  type="button"
                  className="btn border-5 rounded-pill fw-bold btn-cancel"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              {currentModal < 3 && (
                <button
                  type="button"
                  className="btn border-5 rounded-pill fw-bold btn-next text-white"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
              {currentModal === 4 && (
                 <button
                 type="button"
                 className="btn border-5 rounded-pill fw-bold btn-next text-white"
               
               >
                 Submit
               </button>
                
              )}
            </div>
          
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Register;
