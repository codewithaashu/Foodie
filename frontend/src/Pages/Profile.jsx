import React from "react";
import ProfileComp from "../Components/ProfileComp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Orders from "../Components/Orders";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="container-fluid p-4">
        <div className="profileMainContainer">
          <ProfileComp />
          <div className="mainContainer py-4">
            <div className="myProfileHeadingBox">
              <div className="myProfileHeadingTitle">Past Orders</div>
              <div className="myProfileNavigationBox pb-2">
                <div className="profileHeadingNavigationBtn pnactive">
                  <i class="fa-regular fa-bag-shopping"></i>Orders
                </div>
                <div className="profileHeadingNavigationBtn">
                  <i class="fa-regular fa-credit-card-front"></i>Payments
                </div>
                <div className="profileHeadingNavigationBtn">
                  <i class="fa-regular fa-address-card"></i>Addresses
                </div>
                <div className="profileHeadingNavigationBtn">
                  <i class="fa-regular fa-badge-percent"></i>Offers
                </div>
              </div>
            </div>
            <div className="myProfileSectionContainer">
              <Orders />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
