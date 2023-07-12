import React, { useState } from "react";
import Data from "../DB.json";
import { Link } from "react-router-dom";
import "../Styles/HomeHero.css";
const HomeHero = () => {
  const { dishes, offerBanner, resturant } = Data;
  const scrollNext = () => {
    const scrollContainer = document.getElementById("offerBox");
    document.getElementById("prevBtn").style.display = "block";
    scrollContainer.scrollLeft += 300;
    scrollContainer.style.scrollBehavior = "smooth";
    console.log(scrollContainer);
  };
  const scrollPrevious = () => {
    const scrollContainer = document.getElementById("offerBox");
    scrollContainer.scrollLeft -= 300;
    if (scrollContainer.scrollLeft <= 350) {
      document.getElementById("prevBtn").style.display = "none";
    }
    scrollContainer.style.scrollBehavior = "smooth";
  };
  const [scrollDishCount, setScrollDishCount] = useState(0);
  const scrollDishPrevious = () => {
    //enable next btn
    document.getElementById("nextDishBtn").style.display = "block";
    //decrease scrollDishCount
    setScrollDishCount(scrollDishCount - 1);
    if (scrollDishCount === 1) {
      document.getElementById("prevDishBtn").style.display = "none";
    }
    const scrollContainer = document.getElementById("dishesBox");
    scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
    scrollContainer.style.scrollBehavior = "smooth";
  };
  const scrollDishNext = () => {
    //enable previous button
    document.getElementById("prevDishBtn").style.display = "block";
    //increase scrollDishCount
    setScrollDishCount(scrollDishCount + 1);
    console.log(scrollDishCount);
    const scrollContainer = document.getElementById("dishesBox");
    if (
      Math.floor(scrollContainer.scrollWidth / scrollContainer.offsetWidth) -
        1 ===
      scrollDishCount
    ) {
      document.getElementById("nextDishBtn").style.display = "none";
    }
    scrollContainer.scrollLeft += scrollContainer.offsetWidth;
    scrollContainer.style.scrollBehavior = "smooth";
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-4 col-md-3 col-lg-3">
            <div className="searchBox pb-3">
              <input
                className="form-control me-2 locationQuery"
                type="search"
                placeholder="Your location"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="col-8 col-sm-8 col-md-9 col-lg-9">
            <div className="searchBox pb-3">
              <input
                className="form-control me-2 searchQuery"
                type="search"
                placeholder="Search for restaurant,cuisine or dish"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
        <div className="heroContainer">
          <div className="offerBoxWrapper my-3">
            <div className="scrollBtn" onClick={scrollPrevious} id="prevBtn">
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="offerBox" id="offerBox">
              {offerBanner.map((curr, index) => {
                return (
                  <a
                    className="offer anchorText"
                    key={index}
                    href={curr.navigationLink}
                  >
                    <img
                      src={curr.imgSrc}
                      alt="Offer img"
                      className="offerBanner"
                    />
                  </a>
                );
              })}
            </div>
            <div className="scrollBtn" onClick={scrollNext} id="nextBtn">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div className="dishesHeading fs-5">Choose your Dishes</div>
          <div className="dishesBoxWrapper">
            <div
              className="scrollBtn"
              onClick={scrollDishPrevious}
              id="prevDishBtn"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="dishesBox p-3" id="dishesBox">
              {dishes.map((curr, index) => {
                return (
                  <div className="dishes" key={index}>
                    <img
                      src={curr.imgSrc}
                      alt="Dish Img"
                      className="dishImg mb-1"
                    />
                    <div className="dishText">{curr.name}</div>
                  </div>
                );
              })}
            </div>
            <div
              className="scrollBtn"
              onClick={scrollDishNext}
              id="nextDishBtn"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div className="dishesHeading fs-5">All Restaurants</div>
        </div>
      </div>
      <div className="sortingBox">
        <span className="sortingCriteria active">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688978154/ArrowsDownUp_j9e9uz.svg"
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          Sort by:Relevance
        </span>
        <span className="sortingCriteria">Cost : Low to High</span>
        <span className="sortingCriteria">Cost : High to Low</span>
        <span className="sortingCriteria">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688980385/1828884_wtkihh.png"
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          Rating : High to Low
        </span>
        <span className="sortingCriteria">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979984/181954_w1h5el.png"
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          Great Offers
        </span>
        <span className="sortingCriteria">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688997207/726455_umoz7l.png"
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          Delivery Time
        </span>
        <span className="sortingCriteria">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688979024/8GoCcnPbe14i0JcydkYrkhkNgqDebwkIhDDSb0dNIuCeUL53MdSM1pZOAWyRPw-jgAkGp8Ksnk-fdymgbEioRbhmxeRAERVEjAQ0h0GGFQ_jqgpi8.png"
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          Pure Veg
        </span>
        <span className="sortingCriteria">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688997233/503054_czmevi.png"
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          Distance
        </span>
        <span className="sortingCriteria">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688980385/1828884_wtkihh.png"
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          Rating : 4+
        </span>
        <span className="sortingCriteria">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1688997053/brand_lblotm.png"
            alt=""
            style={{
              width: "18px",
              height: "18px",
            }}
          />
          Top Brands
        </span>
      </div>
      <div className="container">
        <div className="heroContainer">
          <div className="resturatantBox my-4">
            {resturant.map((curr, index) => {
              return (
                <Link
                  to="/details"
                  className="card anchorText"
                  style={{ width: "18rem" }}
                  key={index}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img
                    src={curr.imgSrc}
                    className="card-img-top"
                    alt="Resturant img loading ..."
                  />
                  <div className="overlapBox">
                    <div className="offerButton">{curr.offer}</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>&nbsp;</div>
                      <div className="ratingButton">
                        {curr.rating}
                        <i
                          className="fa-regular fa-star"
                          style={{ color: "white", marginLeft: "5px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{curr.hotelName}</h5>
                    <p className="card-text">{curr.dishes}</p>
                    <div className="card-info">
                      <div className="card-link anchorText">
                        <i className="fas fa-shipping-fast"></i>
                        <span>{curr["delivery time"]} min</span>
                      </div>
                      <div className="card-link anchorText">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{curr.distance} km away</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
