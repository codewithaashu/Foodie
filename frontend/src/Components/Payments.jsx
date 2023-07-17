import React from "react";

const Payments = () => {
  return (
    <>
      <div className="paymentsContainer">
        <div className="paymentBox">
          <div className="cardImg">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/PaymentLogos/paymentIcons/cards/rupay"
              alt=""
            />
          </div>
          <div className="cardInfo">
            <div className="cardNumber">XXXX-XXXX-XXXX-3086</div>
            <div className="cardValidityInfo">Valid till 04/2030</div>
          </div>
          <div className="cardActionBtn">Delete</div>
        </div>
      </div>
    </>
  );
};

export default Payments;
