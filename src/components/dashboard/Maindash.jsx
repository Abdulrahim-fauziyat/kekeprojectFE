import React, { useState } from "react";
import Register from "./Register";
import car from "../../assets/jam_car.png";
import vecred from "../../assets/Vecred.png";
import Tick from "../../assets/tick.png";
import pink from "../../assets/twoone.png";
import mark from "../../assets/mark.png";
// import chart from "../../assets/Barchart-X.png";
import GenTicket from "./GenTicket";
import BarData from "./BarData";





const Maindash = () => {
 

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center ">
        <div className="text-container justify-content-center p-5 align-items-center">
          <p className="overview fs-3 ">Overview</p>
          <p className="fw-light fs-5">
            These are the summary of the Registered keke and Tickets
          </p>
        </div>

        <div className="button-container d-flex align-items-center">
        
              <Register/>
              <GenTicket/>
        </div>
      </div>

      <div
        className="container d-flex justify-content-center p-4 mt-5 align-items-center"
        style={{ height: "20vh" }}
      >
        <div className="row justify-content-center container">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card p-4 body-bg-white shadow-lg width-80">
              <img
                src={car}
                alt="Car Icon"
                className="img-thumbnail car border-0 mb-2"
                height={40}
                width={40}
              />
              <p className="fw-light ">Number of Drivers Registered</p>
              <p className="number fs-1">200,890</p>
              <div className="d-flex align-items-center">
                 <div className="fw-bold p-1 d-flex rounded-pill stat-pill ">
                     <span>21%</span>
                  <img
                  src={vecred}
                  alt="Green Arrow"
                  className="img-thumbnail  border-0 me-2"
                  height={60}
                  width={70}
                /> 
                 </div>
                <p className="fw-light mb-0">Since the last month</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card p-4 body-bg-white shadow-lg">
              <img
                src={Tick}
                alt="keke Ticket"
                className="img-thumbnail car border-0 mb-2"
                height={40}
                width={40}
              />
              <p className="fw-light ">Ticket issued</p>
              <p className="number fs-1">200,890</p>
              <div className="d-flex align-items-center">
                <img
                  src={pink}
                  alt="Green Arrow"
                  className="img-thumbnail pic border-0 me-2"
                  height={60}
                  width={70}
                />
                <p className="fw-light mb-0">Since the last month</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card p-4 body-bg-white shadow-lg">
              <img
                src={mark}
                alt="Car Icon"
                className="img-thumbnail car border-0 mb-2"
                height={40}
                width={40}
              />
              <p className="fw-light ">Number of Drivers Registered</p>
              <p className="number fs-1">200,890</p>
              <div className="d-flex align-items-center">
                <img
                  src={pink}
                  alt="Green Arrow"
                  className="img-thumbnail border-0 me-2"
                  height={60}
                  width={70}
                />
                <p className="fw-light mb-0">Since the last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="container justify-content-center p-5 align-items-center mt-5">
        <div className="align-items-center bg-white justify-content-center">
       
                  <BarData/>
        </div>
      </div> 
      
    
    </>
  );
};

export default Maindash;
