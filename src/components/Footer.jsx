import React from "react";
import "../styles/footer.css";
import ContactArrow from "../assets/ContactArrow.svg";
import InstaIcon from "../assets/InstaIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import FBICon from "../assets/FBIcon.svg";
import LinkedIcon from "../assets/LinkedIcon.svg";

function Footer() {
  return (
    <div className="footer-contaier">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={ContactArrow} alt="" />
        <span style={{ color: "#6B6084", marginLeft: "20px" }}>Contact</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "100px",
        }}
      >
        <div style={{ fontSize: "100px", fontWeight: 800, color: "#0D0225" }}>
          Keep in touch
        </div>
        <button
          style={{
            height: "40px",
            width: "178px",
            backgroundColor: "#0047FF",
            color: "white",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Contact Us
        </button>
      </div>
      <div className="footer-tabs">
        <div>
          <div style={{ color: "#6b6084" }}>Start a Conversation</div>
          <div className="footer-gradient-text" style={{ marginTop: "44px" }}>
            Contact@staciacorp.com
          </div>
          <div className="footer-gradient-text" style={{ marginTop: "30px" }}>
            +91-8754595641
          </div>
        </div>
        <div className="footer-nav-tabs">
          <div>
            <div>Company</div>
            <div className="footer-grey-tabs">Company</div>
            <div className="footer-grey-tabs">Careers</div>
            <div className="footer-grey-tabs">Contact</div>
          </div>
          <div>
            <div>Product</div>
            <div className="footer-grey-tabs">Services</div>
            <div className="footer-grey-tabs">Products</div>
            <div className="footer-grey-tabs">Projects</div>
          </div>
          <div>
            <div>Resources</div>
            <div className="footer-grey-tabs">Community</div>
            <div className="footer-grey-tabs">What's New</div>
            <div className="footer-grey-tabs">Case Studies</div>
          </div>
        </div>
        <div>
          <div>Reach Us</div>
          <div className="footer-grey-tabs">
            <div>1st Floor, C-53, Guindy Industrial Estate,</div>
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              Thiru Vi Ka Industrial Estate, SIDCO Industrial
            </div>
            <div>Estate, Guindy, Chennai - 32, Tamil Nadu</div>
          </div>
        </div>
      </div>
      <div className="footer-others">
        <div>
        ©Copyright Stacia<span style={{ color: "#0047FF" }}>Corp</span>. All
          Rights Reserved
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            opacity: "0.6",
            width: "35%",
          }}
        >
          <div>Terms of service</div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#D9D9D9",
              borderRadius: "50%",
              marginLeft: "35px",
              marginRight: "35px",
            }}
          />
          <div>Privacy Policy</div>
        </div>
        <div className="footer-icons">
          <div>
            <img src={InstaIcon} alt="" />
          </div>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            <img src={TwitterIcon} alt="" />
          </div>
          <div style={{ marginRight: "20px" }}>
            <img src={FBICon} alt="" />
          </div>
          <div>
            <img src={LinkedIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
