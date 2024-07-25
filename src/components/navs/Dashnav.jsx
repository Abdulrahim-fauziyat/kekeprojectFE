import React from "react";
import Logo from "../../assets/Logo.png";
import setting from "../../assets/setting.png";
import Help from "../../assets/tdesign.png";
import car from "../../assets/jam_car.png";
import girl from "../../assets/girl.png";
import Overview from "../../assets/Overview.png";
import { Link } from "react-router-dom";

const Dashnav = () => {
  return (
    <nav className="navbar navbar-expand-lg  ps-5 bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img
            src={Logo}
            alt="Logo"
            className="img-thumbnail  border-0"
            height={50}
            width={100}
          />
        </Link>
        <div className="d-flex align-items-center ms-5">
          <button className="btn btn-dark text-center fw-bold me-3">
            Overview
            <span className="pic ms-1">
              <img
                src={Overview}
                alt="Settings"
                className="img-thumbnail bg-dark border-0 me-2"
                height={30}
                width={30}
              />
            </span>
          </button>
          <Link
            className="nav-link  m-5 fw-bold align-items-center me-3"
            to="/settings"
          >
            Settings
            <span className="pic ms-1">
              <img
                src={setting}
                alt="Settings"
                className="img-thumbnail  border-0 me-2"
                height={30}
                width={30}
              />
            </span>
          </Link>
          <Link
            className="nav-link fw-bold bg-white border-0 width-auto m-5 align-items-center"
            to="/keke"
          >
            <span className="me-2">keke</span>
            <img
              src={car}
              alt="keke"
              className="img-thumbnail  border-0"
              height={30}
              width={30}
            />
          </Link>
          <Link
            className="nav-link fw-bold bg-white m-5  align-items-center"
            to="/help"
          >
            <span className="me-2">Help</span>
            <img
              src={Help}
              alt="Help"
              className="img-thumbnail  border-0"
              height={30}
              width={30}
            />
          </Link>
        </div>
        <div>
          <img
            src={girl}
            alt="Settings"
            className="img-thumbnail border-0 me-2"
            height={30}
            width={50}
          />
        </div>
      </div>
    </nav>
  );
};

export default Dashnav;
