import React, { useState } from "react";
import ProfileComp from "../Components/ProfileComp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Orders from "../Components/Orders";
import Payments from "../Components/Payments";
import Addresses from "../Components/Addresses";
import Offers from "../Components/Offers";

const Profile = () => {
  const [profileComp, setProfileComp] = useState("Orders");
  return (
    <>
      <Header />
      <div className="container-fluid p-4">
        <div className="profileMainContainer">
          <ProfileComp />
          <div className="mainContainer py-4">
            <div className="myProfileHeadingBox">
              {profileComp === "Orders" && (
                <div className="myProfileHeadingTitle">Past Orders</div>
              )}
              {profileComp === "Payments" && (
                <div className="myProfileHeadingTitle">Saved Cards</div>
              )}
              {profileComp === "Addresses" && (
                <div className="myProfileHeadingTitle">Saved Addresses</div>
              )}
              {profileComp === "Offers" && (
                <div className="myProfileHeadingTitle">Offers</div>
              )}
              <div className="myProfileNavigationBox pb-2">
                <div
                  className={`profileHeadingNavigationBtn ${
                    profileComp === "Orders" ? "pnactive" : ""
                  }`}
                  onClick={() => setProfileComp("Orders")}
                >
                  <i className="fa-regular fa-bag-shopping"></i>
                  Orders
                </div>
                <div
                  className={`profileHeadingNavigationBtn ${
                    profileComp === "Payments" ? "pnactive" : ""
                  }`}
                  onClick={() => setProfileComp("Payments")}
                >
                  <i className="fa-regular fa-credit-card-front"></i>
                  Payments
                </div>
                <div
                  className={`profileHeadingNavigationBtn ${
                    profileComp === "Addresses" ? "pnactive" : ""
                  }`}
                  onClick={() => setProfileComp("Addresses")}
                >
                  <i className="fa-regular fa-address-card"></i>
                  Addresses
                </div>
                <div
                  className={`profileHeadingNavigationBtn ${
                    profileComp === "Offers" ? "pnactive" : ""
                  }`}
                  onClick={() => setProfileComp("Offers")}
                >
                  <i
                    className="fa-regular fa-badge-percent"
                    onClick={() => setProfileComp("Offers")}
                  ></i>
                  Offers
                </div>
              </div>
            </div>
            <div className="myProfileSectionContainer">
              {profileComp === "Orders" && <Orders />}
              {profileComp === "Payments" && <Payments />}
              {profileComp === "Addresses" && <Addresses />}
              {profileComp === "Offers" && <Offers />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
