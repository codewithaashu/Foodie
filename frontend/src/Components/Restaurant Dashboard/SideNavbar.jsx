import React from "react";
import "../../Styles/Restaurant Dashboard/SideNavBar.css";
import { Link, useLocation } from "react-router-dom";
const SideNavbar = () => {
  const handlerLogout = () => {};
  const location = useLocation();
  const locationURL = location.pathname.split("/")[2];
  return (
    <>
      <div className="sideNavBarContainer">
        <Link
          to="/admin"
          className={`sideNavBar anchorText ${
            !locationURL ? "sideNavBarActive" : ""
          }`}
        >
          <div className="sideNavBarLogo">
            <i className="fa-regular fa-layer-group"></i>
          </div>
          <div className="sideNavBarTitle">Dashboard</div>
        </Link>
        <Link
          className={`sideNavBar anchorText ${
            locationURL === "menu" ? "sideNavBarActive" : ""
          }`}
          to={"menu"}
        >
          <div className="sideNavBarLogo">
            <i className="fa-regular fa-utensils"></i>
          </div>
          <div className="sideNavBarTitle">Menu</div>
        </Link>
        <Link
          to="order"
          className={`sideNavBar anchorText ${
            locationURL === "order" ? "sideNavBarActive" : ""
          }`}
        >
          <div className="sideNavBarLogo">
            <i className="fa-regular fa-pot-food"></i>
          </div>
          <div className="sideNavBarTitle">Orders</div>
        </Link>
        <Link
          to="review"
          className={`sideNavBar anchorText ${
            locationURL === "review" ? "sideNavBarActive" : ""
          }`}
        >
          <div className="sideNavBarLogo">
            <i className="fa-regular fa-star-sharp-half-stroke"></i>
          </div>
          <div className="sideNavBarTitle">Review</div>
        </Link>
        <Link
          to="profile"
          className={`sideNavBar anchorText ${
            locationURL === "profile" ? "sideNavBarActive" : ""
          }`}
        >
          <div className="sideNavBarLogo">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="sideNavBarTitle">Profile</div>
        </Link>
        <div className="sideNavBar" onClick={handlerLogout}>
          <div className="sideNavBarLogo">
            <i className="fa-regular fa-right-from-bracket"></i>
          </div>
          <div className="sideNavBarTitle">Logout</div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
