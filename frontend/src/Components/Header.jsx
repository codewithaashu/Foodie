import React, { useState } from "react";
import "../Styles/Header.css";
import Login from "./Login";
const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
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
              <a className="nav-link fs-6" aria-current="page" href="#download">
                Download App
              </a>
              <a className="nav-link fs-6" href="#partner">
                Become a Partner
              </a>
              <a className="nav-link fs-6" href="#help">
                Help
              </a>
              <a className="nav-link fs-6" onClick={() => setLoginModal(true)}>
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
      {loginModal && (
        <Login loginModal={loginModal} setLoginModal={setLoginModal} />
      )}
    </>
  );
};

export default Header;
