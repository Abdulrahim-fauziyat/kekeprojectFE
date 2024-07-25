import React from 'react'
import user from "../../assets/user.png";
const Users = () => {
  return (
    <>
        <div className="modal-header">
              <div
                className="container-fluid d-flex modal-title fs-5 justify-content-between align-items-center user p-1"
                id="exampleModalLabel"
              >
               <div className="d-flex align-items-center p-2">
                  <img
                    src={user}
                    alt="user"
                    className="img-thumbnail pic border-0 me-2"
                    height={30}
                    width={30}
                  />
                  <span className="overview fs-5">Registered Drivers</span>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                
              ></button>
            </div>



            {/*    <div
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
            <div className="modal-header">
              <div
                className="container-fluid d-flex modal-title fs-5 justify-content-between align-items-center user p-5"
                id="exampleModalLabel"
              >
                <div className="d-flex align-items-center p-2">
                  <img
                    src={Gen}
                    alt="user"
                    className="img-thumbnail pic border-0 me-2"
                    height={30}
                    width={30}
                  />
                  <span className="overview fs-5">Generate Ticket</span>
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
              <div>
                <form>
                  <div className="mb-3">
                    <p className="fw-bold fs-4">
                      Generate a daily ticket for Keke Drivers,
                    </p>
                    <p className="fw-light fs-5">
                      Analysis of the Tickets
                      Task force agents can scan the QR code on this ticket to
                      verify its authenticity during their trip.
                    </p>

                    <div className="container">
                      <div className="fw-bold fs-4">
                        How many blocks of tickets do you want to generate?
                      </div>

                      <div className="container d-flex">
                        <div className="form-check me-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            style={{
                              border: "none",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            100
                          </label>
                        </div>
                        <div className="form-check me-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            style={{
                              border: "none",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            200
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            style={{
                              border: "none",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            500
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            style={{
                              border: "none",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            1000
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <input
                        type="text"
                        className="form-control long-input"
                        id="Full Name"
                        placeholder="Custom (input No of blocks.)"
                      />
                    </div>
                      <div className="d-flex">
                      <p className='fw-light'>Each block has 100 Tickets</p>
                      </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
            
                <button
                  type="button"
                  className="btn border-5 rounded-pill fw-bold btn-draft"
                  onClick={handleClose}
                >
                  Cancel
                </button>
           
             
                <button
                  type="button"
                  className="btn border-5 rounded-pill fw-bold btn-draft"
               
                >
                  Generate
                </button>
           
       
             
            </div>
          </div>
        </div>
      </div> */}
     
    </>
  )
}

export default Users