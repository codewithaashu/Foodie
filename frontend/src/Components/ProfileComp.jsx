import React, { useState } from "react";
import "../Styles/Profile.css";
const ProfileComp = () => {
  const [editProfileData, setEditProfileData] = useState({
    city: "",
    email: "",
  });
  const handlerEditSubmit = () => {
    console.log(editProfileData);
  };
  const profileData = {
    name: "Ashish Ranjan",
    phone: 7371986179,
    email: "ashishrajk123@gmail.com",
    city: "Indore",
  };
  return (
    <>
      <div className="profileContainer p-4">
        <div className="profileImageBox">
          <img
            src="https://static.magicpin.com/samara/static/images/profile.svg"
            alt=""
          />
        </div>
        <div className="profileTitle pb-1">{profileData.name}</div>
        <div className="profileMobile pb-2">+91 {profileData.phone}</div>
        <div className="profileSection pb-2">
          <i className="fa-solid fa-envelope title"></i>{" "}
          <span className="value">{profileData.email}</span>
        </div>
        <div className="profileSection">
          <i className="fa-solid fa-city title"></i>
          <span className="value">{profileData.city}</span>
        </div>
        <div
          className="profileActionBtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
          onClick={() => setEditProfileData(profileData)}
        >
          Edit Profile
        </div>
      </div>
      {
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Profile
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body editAddressModal">
                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      inputMode="text"
                      value={editProfileData.city}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      inputMode="text"
                      value={editProfileData.email}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger text-white"
                  onClick={handlerEditSubmit}
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProfileComp;
