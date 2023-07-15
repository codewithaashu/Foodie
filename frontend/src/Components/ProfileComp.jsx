import React from "react";
import "../Styles/Profile.css";
const ProfileComp = () => {
  return (
    <>
      <div className="profileContainer p-4">
        <div className="profileImageBox">
          <img
            src="https://static.magicpin.com/samara/static/images/profile.svg"
            alt=""
          />
        </div>
        <div className="profileTitle pb-1">Ashish Ranjan</div>
        <div className="profileMobile pb-2">+91 7371986179</div>
        <div className="profileSection pb-2">
          <i class="fa-solid fa-envelope title"></i>{" "}
          <span className="value">ashishrajk123@gmail.com</span>
        </div>
        <div className="profileSection">
          <i class="fa-solid fa-city title"></i>
          <span className="value">Indore</span>
        </div>
        <div className="profileActionBtn">Edit Profile</div>
      </div>
    </>
  );
};

export default ProfileComp;
