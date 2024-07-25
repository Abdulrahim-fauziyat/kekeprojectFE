import React from "react";
import Gen from "../../assets/gen.png";
import loading from "./../../assets/loading.png";

const GenTicket = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content rounded-0 border-0 shadow-lg"
            style={{ backgroundColor: "white", height: "auto", width: "80%" }}
          >
            <div className="modal-header">
              <div className="container-fluid d-flex modal-title fs-5 justify-content-between align-items-center user p-2">
                <div className="d-flex align-items-center">
                  <img
                    src={Gen}
                    alt="user"
                    className="img-thumbnail pic border-0 me-3"
                    height={30}
                    width={30}
                  />
                  <span className="fs-5 fw-bold">Generate Ticket</span>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <p className="daily">Generate a daily ticket for Keke Drivers,</p>
                  <p className="fw-light analysis">
                    Task force agents can scan the QR code on this ticket to verify its authenticity during their trip.
                  </p>

                  <div className="container">
                    <div className="fw-bold fs-6 p-2 justify-content-center align-items-center">
                      How many blocks of tickets do you want to generate?
                    </div>

                    <div className="container d-flex ">
                      <div className="form-check radio-container bg-dark me-3">
                        <input
                          className="form-check-input wide-radio"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          100
                        </label>
                      </div>
                      <div className="form-check radio-container bg-white text-dark me-3">
                        <input
                          className="form-check-input wide-radio"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          200
                        </label>
                      </div>
                      <div className="form-check radio-container bg-white text-dark me-3">
                        <input
                          className="form-check-input wide-radio"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                          500
                        </label>
                      </div>
                      <div className="form-check radio-container bg-white text-dark me-3">
                        <input
                          className="form-check-input wide-radio"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                          1000
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="m-3">
                    <input
                      type="text"
                      className="form-control long-input"
                      id="FullName"
                      placeholder="Custom (input No of blocks.)"
                    />
                  </div>
                  <div className="d-flex m-auto">
                    <p className="fw-light">Each block has 100 Tickets</p>
                  </div>
                </div>
              </form>
              <div className="modal-footer">
                <button
                  className="btn border-5 rounded-pill btn-cancel fw-bold"
                
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn border-5 rounded-pill fw-bold text-white btn-next"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
        <div
            className="modal-content rounded-0 border-0 shadow-lg"
            style={{ backgroundColor: "white", height: "fit-content", width: "70%" }}
          >
            <div className="modal-header">
              <div className="container-fluid d-flex modal-title fs-5 justify-content-between align-items-center user p-2">
                <div className="d-flex align-items-center">
                  <img
                    src={Gen}
                    alt="user"
                    className="img-thumbnail pic border-0 me-3"
                    height={30}
                    width={30}
                  />
                  <span className="fs-5 fw-bold">Generate Ticket</span>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
            
                <div className="align-items-center justify-content-center m-4 p-2">
                  <img
                    src={loading}
                    alt="user"
                    className="img-thumbnail loading  border-0 me-2"
                    
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn border-5 rounded-pill fw-bold btn-draft"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn border-5 rounded-pill fw-bold btn-next text-white"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-dark fw-bold border-0 text-white tickets shadow-sm rounded p-2"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Generate Tickets
      </button>
    </>
  );
};

export default GenTicket;
