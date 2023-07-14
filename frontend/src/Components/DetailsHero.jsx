import React, { useState } from "react";
import "../Styles/DetailsHero.css";
import Data from ".././DB.json";
import { useNavigate } from "react-router-dom";
const DetailsHero = () => {
  const { resturant } = Data;
  const hotel = resturant[2];
  const [caratBtn, setCaratBtn] = useState(true);
  const [clickedAddBtn, setClickedAddBtn] = useState([]);
  const [clickedCaratBtn, setClickedCaratBtn] = useState(null);
  const navigate = useNavigate();
  const handlerCaratBtn = (index) => {
    if (clickedCaratBtn === index) {
      setCaratBtn(!caratBtn);
    } else {
      setCaratBtn(false);
    }
    setClickedCaratBtn(index);
  };
  const handlerAddBtn = (id, item) => {
    setClickedAddBtn([...clickedAddBtn, { id, item, quantity: 1 }]);
  };
  const increaseQuantity = (id) => {
    const clickedDiv = clickedAddBtn.find((curr) => curr.id === id);
    if (clickedDiv.quantity < 5) {
      setClickedAddBtn(
        clickedAddBtn.map((curr) => {
          if (curr.id === id) {
            curr = { ...clickedDiv, quantity: clickedDiv.quantity + 1 };
          }
          return curr;
        })
      );
    }
  };
  const decreaseQuantity = (id) => {
    console.log(clickedAddBtn);
    const clickedDiv = clickedAddBtn.find((curr) => curr.id === id);
    if (clickedDiv.quantity === 1) {
      setClickedAddBtn(clickedAddBtn.filter((curr) => curr.id !== id));
    } else {
      setClickedAddBtn(
        clickedAddBtn.map((curr) => {
          if (curr.id === id) {
            curr = { ...clickedDiv, quantity: clickedDiv.quantity - 1 };
          }
          return curr;
        })
      );
    }
  };
  return (
    <>
      <div className="container my-3">
        <div className="shopBannerContainer pb-3">
          <div
            className="shopBannerImg"
            style={{ backgroundImage: `url(${hotel.bannerImg})` }}
          >
            &nbsp;
          </div>
          <div className="shopBannerContent">
            <div className="left">
              <div className="hotelName fs-4">{hotel.hotelName}</div>
              <div className="dishesName">{hotel.dishes}</div>
              <div className="deliveryInfo">
                <div className="info">
                  <i className="fas fa-shipping-fast"></i>
                  <span>{hotel["delivery time"]} min</span>
                </div>
                <div className="info">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{hotel.distance} km</span>
                </div>
                <div className="info">
                  <i className="fa-regular fa-clock"></i>
                  <span style={{ color: "green", fontWeight: "500" }}>
                    Open now <span>| Closes at {hotel.closingTime}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="ratingInfo">
                <div className="ratingButton">
                  {hotel.rating}
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "white", marginLeft: "5px" }}
                  ></i>
                </div>
                {hotel.noOfReviws} reviews
              </div>
              <div className="searchBox pb-3">
                <input
                  className="form-control me-2 searchQuery"
                  type="search"
                  placeholder="Search for cuisine or dish"
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dishesContainer my-4">
          {hotel.menu.map((curr, index) => {
            return (
              <div
                className="dishesFilterBox pb-2"
                key={index}
                id={`${Object.keys(curr)[0]}`}
              >
                <div className="dishesFilterHeading">
                  <div className="dishesFilterTitle fs-5">
                    {Object.keys(curr)[0]} ({Object.values(curr)[0].length})
                  </div>
                  <i
                    className="fa-solid fa-caret-up collapseButton"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseExample${index}`}
                    aria-expanded="true"
                    aria-controls="collapseExample"
                    onClick={() => handlerCaratBtn(index)}
                    style={{
                      display:
                        caratBtn || clickedCaratBtn !== index
                          ? "block"
                          : "none",
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-caret-down collapseButton"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseExample${index}`}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    style={{
                      display:
                        !caratBtn && clickedCaratBtn === index
                          ? "block"
                          : "none",
                    }}
                    onClick={() => handlerCaratBtn(index)}
                  ></i>
                </div>
                <div className="collapse show" id={`collapseExample${index}`}>
                  {Object.values(curr)[0].map(
                    (item, indx = (index + 1) * (indx + 1)) => {
                      return (
                        <div className="dish" key={indx}>
                          <div className="dishImgBox">
                            <img src={item.itemImg} alt="" />
                            <div
                              className="addBtn"
                              style={{
                                display: clickedAddBtn.some(
                                  (curr) => curr.item.id === item.id
                                )
                                  ? "none"
                                  : "block",
                              }}
                              onClick={() => handlerAddBtn(item.id, item)}
                            >
                              Add
                            </div>
                            <div
                              className="quantityBtn"
                              style={{
                                display: clickedAddBtn.some(
                                  (curr) => curr.item.id === item.id
                                )
                                  ? "block"
                                  : "none",
                                fontSize: "14px",
                              }}
                            >
                              <i
                                className="fa-solid fa-minus px-2"
                                style={{ fontSize: "13px" }}
                                onClick={() => decreaseQuantity(item.id)}
                              ></i>
                              {
                                clickedAddBtn.find(
                                  (curr) => curr.id === item.id
                                )?.quantity
                              }

                              <i
                                className="fa-solid fa-plus px-2"
                                style={{ fontSize: "13px" }}
                                onClick={() => increaseQuantity(item.id)}
                              ></i>
                            </div>
                          </div>
                          <div className="dishContent">
                            <div className="dishesType">
                              <img
                                src={
                                  item.type === "non-veg"
                                    ? "https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                                    : "https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
                                }
                                alt=""
                                style={{
                                  width: "18px",
                                  height: "18px",
                                }}
                              />
                            </div>
                            <div className="dishTitle fs-6">
                              {item.itemName}
                            </div>
                            <div className="ratingButton dishRating">
                              {item.itemRating}
                              <i className="fa-regular fa-star"></i>
                            </div>
                            <div className="dishPrice">₹ {item.price}</div>
                            <div className="dishSub-title">
                              {item.itemDescription}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="stickyContainerWrapper">
          <div className="stickyContainer">
            <div className="menuBtnWrapper mb-3">
              <div
                className="menuBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689197322/1046806_ivs4jo.png"
                  alt=""
                />
                <div>Browse Menu</div>
              </div>
            </div>
            <div
              className="addCartBtnWrapper"
              style={{
                display:
                  clickedAddBtn.reduce((accum = 0, curr) => {
                    return accum + curr.quantity;
                  }, 0) > 0
                    ? "block"
                    : "none",
              }}
            >
              <div className="addCartBtn">
                <div className="cartInfo">
                  {clickedAddBtn.reduce((accum = 0, curr) => {
                    return accum + curr.quantity;
                  }, 0)}{" "}
                  Item | ₹
                  {clickedAddBtn.reduce((accum = 0, curr) => {
                    return accum + curr.quantity * curr.item.price;
                  }, 0)}
                </div>
                <div
                  className="cartActionBtn anchorText"
                  onClick={() =>
                    navigate("/cart", {
                      state: {
                        hotelName: hotel.hotelName,
                        hotelBanner: hotel.bannerImg,
                        cartDetails: clickedAddBtn,
                      },
                    })
                  }
                >
                  <div className="cartActionTitle">View Cart</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 21.002 23.5"
                  >
                    <path
                      data-name="Path 337551"
                      d="M1591.25 1038.75v1.25a.75.75 0 0 0 1.5 0v-1.25h1.471a1.25 1.25 0 0 1 1.242 1.1l1.529 13a1.249 1.249 0 0 1-1.241 1.4h-15.5a1.249 1.249 0 0 1-1.241-1.4l1.529-13a1.25 1.25 0 0 1 1.241-1.1h1.472v1.25a.75.75 0 0 0 1.5 0v-1.25zm1.5-1.5v-.25a4.75 4.75 0 0 0-9.5 0v.25h-1.472a2.75 2.75 0 0 0-2.731 2.429l-1.529 13a2.75 2.75 0 0 0 2.731 3.071h15.5a2.75 2.75 0 0 0 2.731-3.071l-1.529-13a2.751 2.751 0 0 0-2.732-2.429zm-4.75-3.5a3.25 3.25 0 0 0-3.25 3.25v.25h6.5v-.25a3.25 3.25 0 0 0-3.25-3.25z"
                      transform="translate(-1577.499 -1032.25)"
                      style={{ fill: "white", fillRule: "evenodd" }}
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            style={{ alignItems: "end" }}
          >
            <div className="modal-content" style={{ marginBottom: "34px" }}>
              <div className="modal-body p-4">
                {hotel.menu.map((curr, index) => {
                  return (
                    <div className="menuList" key={index}>
                      <div
                        className="menuTitle"
                        onClick={() => {
                          window.location.replace(`#${Object.keys(curr)[0]}`);
                        }}
                        data-bs-dismiss="modal"
                      >
                        {Object.keys(curr)[0]}
                      </div>
                      <div className="menuQuantity">
                        {Object.values(curr)[0].length}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsHero;
