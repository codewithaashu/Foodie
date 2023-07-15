import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footerContainerWrapper">
        <div className="footerContainer container">
          <div className="companyBoxWrapper">
            <div className="companyTitle">Company</div>
            <div className="companyBox">
              <a href="#" className="footerNavItem anchorText" target="_blank">
                About Us
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                Restaurant Sign Up
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                Delivery Sign Up
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                Contact Us
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                FAQ
              </a>
            </div>
          </div>
          <div className="legalBoxWrapper">
            <div className="legalTitle">Legal</div>
            <div className="legalBox">
              <a href="#" className="footerNavItem anchorText" target="_blank">
                Terms & Conditions
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                Refund & Cancellation
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                Privacy Policy
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                Cookie Policy
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                Offer Terms
              </a>
            </div>
          </div>
          <div className="downloadBoxWrapper">
            <div className="downloadTitle">Download the App</div>
            <div className="downloadBox">
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
          <div className="followBoxWrapper">
            <div className="followTitle">Follow Us On</div>
            <div className="followBox">
              <a href="#" className="footerNavItem anchorText" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="footerNavItem anchorText" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright pt-2">Copyright © 2023 foodie.com</div>
      </div>
    </>
  );
};

export default Footer;
