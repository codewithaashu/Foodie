import React, { useState } from "react";
import "../Styles/CartHero.css";
import { Link, useLocation } from "react-router-dom";
const CartHero = () => {
  const [addressData, setAddressData] = useState({
    pincode: "",
    state: "",
    city: "",
    address: "",
    locality: "",
    addressType: "",
  });
  const location = useLocation();
  const handlerAddAddress = () => {
    console.log(addressData);
  };
  var hotelName, hotelBanner, cartDetails;
  var totalItemPrice;
  if (location?.state) {
    var {
      state: { hotelName, hotelBanner, cartDetails },
    } = location;
    totalItemPrice = cartDetails.reduce((total, elem) => {
      return total + Number(elem.item.price) * elem.quantity;
    }, 0);
  }
  const perKmDeliverFees = 9;
  const distance = 4;
  const totalDeliveryFees = distance * perKmDeliverFees;
  return (
    <>
      {location.state === null ? (
        <div className="emptyCartContainer">
          <div className="emptyCart">
            <img
              src="https://res.cloudinary.com/ddzlhdlda/image/upload/e_bgremoval/v1689585073/empty-cart_vofunw.png"
              alt=""
            />
            <div className="emptyCartTitle">Your Cart is Empty</div>
            <div className="emptyCartSubTitle">
              Looks like you haven't added anything to your cart yet
            </div>
            <Link to="/home" className="emptyCartActionBtn anchorText">
              Add your favourite dish
            </Link>
          </div>
        </div>
      ) : (
        <div className="container cartContainer mt-5 mb-3">
          <div className="checkoutInfoContainer">
            <div className="addressContainer p-4">
              <div className="addressContTitle">Select delivery address</div>
              <div className="addressContSubTitle">
                You have a saved address in this location
              </div>
              <div className="addressBox py-4">
                <div className="address">
                  <div className="addressTitleWrapper pb-1">
                    <i className="far fa-map-marker-check"></i>
                    <div className="addressTitle">Shreya Hostel Address</div>
                  </div>
                  <div className="addressContent">
                    Tripuri Girls Hostel, 7G2F+5H5, Bhopal, Madhya Pradesh
                    462022, India
                  </div>
                  <div className="addressDeliveryTime py-2">48 min</div>
                  <div className="addressActionBtn my-2">Deliver Here</div>
                </div>
                <div className="address">
                  <div className="addressTitleWrapper pb-1">
                    <i
                      className="far fa-map-marker-plus"
                      style={{ color: "red" }}
                    ></i>
                    <div
                      className="addressAddTitle"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Add New Address
                    </div>
                  </div>
                  <div className="addressContent">
                    Bhopal, Madhya Pradesh , India
                  </div>
                  <div
                    className="addressDeliveryTime py-2"
                    style={{ visibility: "hidden" }}
                  >
                    48 min
                  </div>
                  <div className="addressAddActionBtn my-2">Deliver Here</div>
                </div>
              </div>
            </div>
            <div className="paymentContainer p-4">
              <div className="addressContTitle">Choose payment method</div>
            </div>
          </div>
          <div className="checkoutItemContainer py-4">
            <div className="checkoutHotelBox">
              <div className="checkoutHotelImg">
                <img alt="" src={hotelBanner} />
              </div>
              <div className="checkoutHotelName">{hotelName}</div>
            </div>
            <div className="checkoutCartBox">
              <div className="checkoutCartItemBox">
                {cartDetails?.map((curr, index) => {
                  return (
                    <div className="checkoutCartItem" key={index}>
                      <div className="itemName">
                        {" "}
                        <img
                          src={
                            curr?.item?.type === "non-veg"
                              ? "https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                              : "https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
                          }
                          alt=""
                          style={{
                            width: "14px",
                            height: "14px",
                          }}
                        />
                        <span>{curr?.item?.itemName}</span>
                      </div>
                      <div className="itemQuantityBtn">
                        <i
                          className="fa-solid fa-minus px-2"
                          style={{ fontSize: "13px" }}
                        ></i>
                        {curr?.quantity}
                        <i
                          className="fa-solid fa-plus px-2"
                          style={{ fontSize: "13px" }}
                        ></i>
                      </div>
                      <div className="itemPrice">
                        ₹ {curr?.quantity * Number(curr?.item.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cookingInstructionBox">
                <textarea
                  name="cookingInstruction"
                  id="cookingInstruction"
                  maxLength="140"
                  className="cookingInstruction"
                  placeholder="Add Cooking Instructions"
                ></textarea>
              </div>
              <div className="moreItemContainer">
                <div className="moreItemContTitle">People also added</div>
                <div className="moreItemBox py-2">
                  <div className="moreItem">
                    <div className="moreItemImgBox">
                      <img
                        src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689357612/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_24640-80691_lkwfdm.jpg"
                        alt=""
                      />
                    </div>
                    <div className="moreItemDishContent">
                      <div className="moreItemTitle">Tandoori Paneer</div>
                      <div className="moreItemPrice">
                        <div>₹ 319</div>
                        <i className="fa-solid fa-circle-plus moreItemAddBtn"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="applyCouponBox mb-2">
                <img
                  src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689251661/discount_lybin7.png"
                  alt=""
                />
                <div className="appplyCouponBtn">Apply Coupon</div>
              </div>
              <div className="billingDetailsBox">
                <div className="billingDetailsTitle">Billing Summary</div>
                <div className="billingBox">
                  <div className="billingItem">
                    <div className="billingItemTitle">
                      <i className="far fa-pot-food"></i>&nbsp; Item Total
                    </div>
                    <div className="billingItemValue">₹ {totalItemPrice}</div>
                  </div>
                  <div className="billingItem">
                    <div className="billingItemTitle">
                      <i className="fa-solid fa-bicycle"></i>&nbsp; Delivery
                      partner fee
                    </div>
                    <div className="billingItemValue">
                      ₹ {totalDeliveryFees}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="billBox">
              <div className="billTitle">To Pay</div>
              <div className="billValue">
                ₹ {totalItemPrice + totalDeliveryFees}
              </div>
            </div>
          </div>
        </div>
      )}
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
                Add Address
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
                    value={addressData.pincode}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
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
                    value={addressData.state}
                    required={true}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
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
                    value={addressData.city}
                    required={true}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
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
                    value={addressData.address}
                    required={true}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
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
                    value={addressData.locality}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
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
                        setAddressData({
                          ...addressData,
                          addressType: e.target.value,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
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
                        setAddressData({
                          ...addressData,
                          addressType: e.target.value,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
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
                        setAddressData({
                          ...addressData,
                          addressType: e.target.value,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
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
                onClick={handlerAddAddress}
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartHero;
