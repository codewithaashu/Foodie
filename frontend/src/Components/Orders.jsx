import React from "react";

const Orders = () => {
  return (
    <>
      <div className="orderContainer">
        <div className="orderBox">
          <div className="orderHotelDetailsWrapperBox">
            <a href="/" className="orderHotelDetailsBox anchorText">
              <div className="orderHotelImgBox">
                <img
                  src="https://img.freepik.com/free-photo/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_24640-80691.jpg?t=st=1689066157~exp=1689069757~hmac=7c3f379a826b894fad6b5a4be324c19ccc79162ce0c25e7c90d3a3f8566179d1&w=1380"
                  alt=""
                />
              </div>
              <div className="orderHotelName">
                <div className="hotelName">Da Pizzeria</div>
                <div className="hotelLocation">Bhopal</div>
                <div className="openingTime">Opens at 11am</div>
              </div>
            </a>
            <div className="orderNavigationBox">
              <div className="reorderBtn">Re-Order &gt;</div>
              <div className="viewDetailsBtn">View Details &gt;</div>
            </div>
          </div>
          <div className="orderMenuDetailsBoxWrapper">
            <div className="orderMenuDetailsBox">
              <div className="orderMenu">
                <img
                  src={
                    true
                      ? "https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                      : "https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
                  }
                  alt=""
                />
                <span className="orderQuantity">
                  <span>2</span>
                  <i className="fa-solid fa-xmark"></i>
                </span>
                <span className="orderMenuName">Double Topping Pizza</span>
              </div>
              <div className="orderMenuSubTitle">Paneer & Onion</div>
            </div>
            <div className="orderMenuDetailsBox">
              <div className="orderMenu">
                <img
                  src={
                    true
                      ? "https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                      : "https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
                  }
                  alt=""
                />
                <span className="orderQuantity">
                  <span>2</span>
                  <i className="fa-solid fa-xmark"></i>
                </span>
                <span className="orderMenuName">Double Topping Pizza</span>
              </div>
              <div className="orderMenuSubTitle">Paneer & Onion</div>
            </div>
            <div className="orderMenuDetailsBox">
              <div className="orderMenu">
                <img
                  src={
                    true
                      ? "https://res.cloudinary.com/ddzlhdlda/image/upload/v1689236363/icons8-non-vegetarian-food-symbol-48_c9qpyy.png"
                      : "https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
                  }
                  alt=""
                />
                <span className="orderQuantity">
                  <span>2</span>
                  <i className="fa-solid fa-xmark"></i>
                </span>
                <span className="orderMenuName">Double Topping Pizza</span>
              </div>
              <div className="orderMenuSubTitle">Paneer & Onion</div>
            </div>
          </div>
          <div className="orderInfoDetailsBox">
            <div className="orderTimeInfo">10 Jun 2023 at 2:08PM</div>
            <div className="orderPriceInfo">₹ 319</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
