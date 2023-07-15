import React from "react";
import "../Styles/WelcomeHero.css";
const WelcomeHero = () => {
  return (
    <>
      <div className="container ">
        <div className="welcomeHeroCont py-5 px-4">
          <div className="leftHeroContainer">
            <div className="heroContTitle">
              Order your Food & Enjoy the Taste
            </div>
            <div className="searchLocationCont mt-3">
              <input
                className="form-control"
                type="search"
                placeholder="Enter your delivery location"
                aria-label="Search"
              />
              <button className="locateMeBtn">
                <i className="fa fa-solid fa-location-crosshairs"></i>
                <span>Locate Me</span>
              </button>
              <div className="findFoodBtn">Find Food</div>
            </div>
          </div>
          <div className="rightHeroContainer">
            <img
              src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689321108/46379_deezyc.jpg"
              alt="Delievery Boy Img"
            />
          </div>
        </div>
      </div>
      <div className="downloadAppBoxWrapper py-4" id="download">
        <div className="container downloadAppBox">
          <div className="leftDownloadAppBox">
            <div className="leftDownloadAppBoxTitle">
              Simple way to order your food faster
            </div>
            <div className="leftDownloadAppBoxSubTitle">
              Ordering on the mobile app, especially if you are on the move, is
              the best way to order food. With a user-friendly interface it is
              efficient in getting your food wherever you are.
            </div>
            <div className="leftDownloadAppBoxActionImg pt-5">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689347038/play_ip0jfp_rg3wrv.png"
                  alt=""
                  height="54"
                />
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689347023/iOS_ajgrty_qcrl5t.png"
                  alt=""
                  height="54"
                />
              </a>
            </div>
          </div>
          <div className="rightDownloadAppBox">
            <img
              src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689357659/food-banner-righ_mobilet_h413mt.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="orderInfoContainerWrapper py-4" id="help">
        <div className="orderInfoContainer container">
          <div className="orderInfoTitle">How to order?</div>
          <div className="orderInfoSubTitle">Follow these Steps</div>
          <div className="orderInfoFlowChart">
            <div className="orderInfoFlowItem">
              <img
                src="https://res.cloudinary.com/ddzlhdlda/image/upload/e_bgremoval/v1689339294/3917509_gdms5b.jpg"
                alt="order flow chart img"
              />
              <div className="orderInfoFlowItemTitle">Select Restaurant</div>
            </div>
            <div className="orderInfoFlowItem">
              <img
                src="https://res.cloudinary.com/ddzlhdlda/image/upload/e_bgremoval/v1689342568/13281_khbidu.jpg"
                alt="order flow chart img"
              />
              <div className="orderInfoFlowItemTitle">Select Menu</div>
            </div>
            <div className="orderInfoFlowItem">
              <img
                src="https://res.cloudinary.com/ddzlhdlda/image/upload/e_bgremoval/v1689342121/5739256_jewjj8.jpg"
                alt="order flow chart img"
              />
              <div className="orderInfoFlowItemTitle">Make your Order</div>
            </div>
            <div className="orderInfoFlowItem">
              <img
                src="https://res.cloudinary.com/ddzlhdlda/image/upload/e_bgremoval/v1689339293/4676729_gevwln.jpg"
                alt="order flow chart img"
              />
              <div className="orderInfoFlowItemTitle">Wait For Delivery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="partnerBoxWrapper" id="partner">
        <div className="partnerBox container py-5">
          <div className="partner">
            <div className="partnerImg pb-3">
              <img
                src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689357468/fast-food-restaurant-png_bugccb.png"
                alt=""
              />
            </div>
            <div className="partnerTitle">Restaurant ? Partner with us</div>
            <div className="partnerSubTitle">
              Increase your sales, Reach new customers and grow your corporate
              catering. There are no up-front costs and we handle all the
              logistics.
            </div>
            <div className="partnerAction py-4">
              <button className="partnerActionBtn">Learn More &gt;</button>
            </div>
          </div>
          <div className="deliveryParnter">
            <div className="partner">
              <div className="partnerImg pb-3">
                <img
                  src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1689357499/Delivery-Bike-PNG_mh6gvc.png"
                  alt=""
                />
              </div>
              <div className="partnerTitle">Deliver with Us</div>
              <div className="partnerSubTitle">
                Deliver food in your city and earn some extra cash. Experience
                the freedom of working whenever you want.
              </div>
              <div className="partnerAction pt-4">
                <button className="partnerActionBtn">Learn More &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeHero;
