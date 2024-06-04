import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="above-footer">
        <img src="src/assets/Facebook.png" alt="" />
        <img src="src/assets/Instagram.png" alt="" />
        <img src="src/assets/X.png" alt="" />
        <img src="src/assets/Tiktok.png" alt="" />
        <img className="youtube" src="src/assets/Youtube.png" alt="" />
      </div>
      <div className="footer">
        <div className="left-footer">
          <h3>Bun Drop</h3>
          <p>News</p>
          <p>Supply chain</p>
          <p>Our partners</p>
          <p>Terms of Use</p>
        </div>
        <div className="middle-footer">
          <h3>Service</h3>
          <p>Help</p>
          <p>FAQ</p>
          <p>Feedback</p>
          <p>Bug Report</p>
        </div>
        <div className="right-footer">
          <h3>Activity</h3>
          <p>Apply now</p>
          <p>Contact us</p>
          <p>Giveaway</p>
          <p>Co-branding</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
