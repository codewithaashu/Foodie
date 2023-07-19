import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Restaurant Dashboard/Header.css";
const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary dashboardNavBar">
      <div className="container-fluid">
        <Link
          className="navbar-brand brandStyle"
          to="/home"
          style={{ fontSize: "30px" }}
        >
          Foodie
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className="nav-link dashboardPageHeaderTitle"
                aria-current="page"
              >
                Dashboard
              </div>
            </li>
            <li className="nav-item">
              <div className="activeOutletBox nav-link">
                <div className="activeTitle">Active</div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onClick={() => setActive(!active)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {active ? "ON" : "OFF"}
                  </label>
                </div>
              </div>
            </li>
          </ul>
          <input
            className="form-control searchQuery dashboardHeaderInput"
            type="search"
            placeholder="Search Here"
            aria-label="Search"
            style={{ width: "40%", borderRadius: "20px" }}
          />
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link notification" aria-current="page">
                <i
                  className="fa-solid fa-bell"
                  style={{ fontSize: "1.2rem" }}
                ></i>
                <div className="notificationQuantity">10</div>
              </div>
            </li>
            <li className="nav-item">
              <div className="adminPicBox nav-link">
                <img
                  src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1685248438/todoApp/msms4ujwsbxewcropg7a.jpg"
                  alt=""
                />
                <div className="adminName">Ashish Ranjan</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
