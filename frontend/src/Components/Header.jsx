import React from "react";
import "../Styles/Header.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand brandStyle" href="#">
            Foodie
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link fs-6" aria-current="page" href="#">
                Download App
              </a>
              <a className="nav-link fs-6" href="#">
                Become a Partner
              </a>
              <a className="nav-link fs-6" href="#">
                Help
              </a>
              <a className="nav-link fs-6" href="#">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
