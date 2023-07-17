import React, { useState } from "react";
import "../Styles/Header.css";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
const Header = ({ isWelcome }) => {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
  const handlerLogout = () => {
    console.log("logout successfully");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link
            className="navbar-brand brandStyle"
            to={isWelcome ? "/" : "/home"}
          >
            Foodie
          </Link>
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
            {isWelcome && (
              <div className="navbar-nav ms-auto">
                <a
                  className="nav-link fs-6"
                  aria-current="page"
                  href="#download"
                >
                  Download App
                </a>
                <a className="nav-link fs-6" href="#partner">
                  Become a Partner
                </a>
                <a className="nav-link fs-6" href="#help">
                  Help
                </a>
                <div
                  className="nav-link fs-6 anchorText"
                  onClick={() => setLoginModal(true)}
                >
                  Login
                </div>
              </div>
            )}
            {!isWelcome && (
              <div className="navbar-nav ms-auto">
                <Link className="nav-link fs-6" to="/profile">
                  <i className="fa-regular fa-user "></i>
                  Profile
                </Link>
                <Link className="nav-link fs-6" to="/cart">
                  <i className="fa-sharp fa-light fa-cart-shopping"></i>
                  Cart
                </Link>
                <div
                  className="nav-link fs-6 anchorText"
                  onClick={handlerLogout}
                >
                  <i className="fa-regular fa-arrow-right-from-bracket"></i>
                  Logout
                </div>
              </div>
            )}
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
