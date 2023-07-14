import React from "react";
import "../Styles/CartHero.css";
import { useLocation } from "react-router-dom";
const CartHero = () => {
  const location = useLocation();
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
      {location.state !== null && (
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
                    <div className="addressAddTitle">Add New Address</div>
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
                        src="https://img.freepik.com/free-photo/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_24640-80691.jpg?t=st=1689066157~exp=1689069757~hmac=7c3f379a826b894fad6b5a4be324c19ccc79162ce0c25e7c90d3a3f8566179d1&w=1380"
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
    </>
  );
};

export default CartHero;
