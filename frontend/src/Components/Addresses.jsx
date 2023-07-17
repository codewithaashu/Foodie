import React, { useState } from "react";

const Addresses = () => {
  const addresses = [
    {
      pincode: 201301,
      state: "Uttar Pradesh",
      city: "Noida",
      address: "Andhra Prince PG",
      locality: "Sector 62",
      addressType: "Home",
    },
    {
      pincode: 201302,
      state: "Uttar Pradesh",
      city: "Noida",
      address: "Rasoolpur Nawada",
      locality: "Sector 63",
      addressType: "Work",
    },
  ];
  const [editFormData, setEditFormData] = useState({
    pincode: "",
    state: "",
    city: "",
    address: "",
    locality: "",
    addressType: "",
  });
  const handlerEditSubmit = () => {
    console.log(editFormData);
  };
  return (
    <>
      <div className="addressesContainer py-4 px-3">
        {addresses.map((curr, index) => {
          return (
            <div className="address" key={index}>
              <div className="addressTitle">{curr.addressType}</div>
              <div className="addressesContent">
                {curr.address}, {curr.locality}, {curr.city}, {curr.state},
                India
              </div>
              <div className="addressesActionBtn">
                <div
                  className="addressEditBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setEditFormData(curr)}
                >
                  Edit
                </div>
                <div className="addressRemoveBtn">Remove</div>
              </div>
            </div>
          );
        })}
      </div>
      {
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Address
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
                  <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">
                      Pincode*
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="inputZip"
                      name="pincode"
                      value={editFormData.pincode}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          pincode: e.target.value,
                        })
                      }
                      maxLength="6"
                      required={true}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputState"
                      inputMode="text"
                      value={editFormData.state}
                      required={true}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          state: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      inputMode="text"
                      value={editFormData.city}
                      required={true}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Address(House No,Building,Street,Area)*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      inputMode="text"
                      value={editFormData.address}
                      required={true}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Locality/Town
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      inputMode="text"
                      value={editFormData.locality}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          locality: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Type of Address*
                    </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="addressType"
                        id="addressType"
                        value="Home"
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            addressType: e.target.value,
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Home
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="addressType"
                        id="addressType"
                        value="Office"
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            addressType: e.target.value,
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Office
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="addressType"
                        id="addressType"
                        value="Other"
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            addressType: e.target.value,
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Other
                      </label>
                    </div>
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

export default Addresses;
