import React, {  useState } from "react";
import "../styles/navbar.css";
import StaciaLogo from "../assets/StaciaLogo.svg";
import ContactIcon from "../assets/ContactIcon.svg";
import { NavLink, Link } from "react-router-dom";
// import droparrow from "../assets/droparrow.png"
import MobileNav from "../assets/MobileNav.png"
// import ActiveStar from "../assets/ActiveStar.png"
import WhatsNew from "./WhatsNew";


function NavBar() {
  const [openWhatsNew, setOpenWhatsNew] = useState(0);

  return (
    <div className="nav-container">
      <div className="nav-items-container">
        <div className="nav-left">
          <div className="mobile-nav">
            <img src={MobileNav} alt="" />
          </div>
          <Link to={"/"}>
            <img src={StaciaLogo} alt="Home" className="nav-logo" />
          </Link>

          <NavLink to={"/service"} className="nav-items">
            Services
          </NavLink>
          <NavLink to={"/product"} className="nav-items">
            Products
          </NavLink>
          <NavLink to={"/project"} className="nav-items">
            Projects
          </NavLink>
          <div className="dropdown">
            <input type="checkbox" name="" id="btn" className="check" />
            <div className="dropdown-name">Resource</div>
            <div className="dropdown-links">
              <NavLink to={"/resource"} className="drop-items">
                Community
              </NavLink>
              <NavLink to={"/resource"} className="drop-items">
                What's new
              </NavLink>
              <NavLink to={"/case-study"} className="drop-items">
                Case studies
              </NavLink>
            </div>
          </div>
          {/* <div className="nav-items" style={{ opacity: 0.5 }}>
            Resources
          </div> */}
          <NavLink to={"/career"} className="nav-items">
            Careers
          </NavLink>

          <div className="mobile-whatsnew" style={{ marginLeft: '25px' }} onClick={() => setOpenWhatsNew(!openWhatsNew)}>
            {
              openWhatsNew ? <div
                style={{
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '16px',
                }}
              >What' New</div> : <div
                style={{
                  color: 'rgba(255, 255, 255, 0.50)',
                  fontSize: '16px',
                  cursor: 'pointer',
                  fontWeight: '600',
                }}
              >What' New</div>
            }
          </div>
        </div>
        <div className="nav-right">
          <Link to={"/community"} className="nav-item-whatsnew">
            Community
          </Link>
          <div
            style={{
              height: "48px",
              width: "2px",
              backgroundColor: "#fff",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          ></div>
          <img src={ContactIcon} alt="" />
        </div>
      </div>
      {
        openWhatsNew ? <WhatsNew /> : ''
      }

    </div>
  );
}

export default NavBar;
