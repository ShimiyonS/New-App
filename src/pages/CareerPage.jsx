import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import "../styles/career.css";
import CareerComponent from "../components/CareerComponent";
import LifeStaciaImg1 from "../assets/life@staciaImg1.png";
import LifeStaciaImg2 from "../assets/life@staciaImg2.png";
import LifeStaciaImg3 from "../assets/life@staciaImg3.png";
import LifeStaciaImg4 from "../assets/life@staciaImg4.png";

import { allJobs } from "../data/JobsData";

function CareerPage() {
  const [Jobs] = useState(allJobs);
  const [showApplication, setShowApplication] = useState(false);
  // console.log(showApplication);
  return (
    <div className={showApplication ? "fixed" : ""}>
      <NavBar />
      <div className="career-hero-section">
        <div className="career-hero-contents">
          <div>
            <div className="career-title">Careers</div>
            <div style={{ opacity: "0.6", fontSize: "30px", fontWeight: 500 }}>
              In Stacia Corp
            </div>
          </div>
          <div>
            <p>
              Come, join us!{" "}
              <span style={{ color: "#0047FF" }}>We're hiring.</span>
            </p>
            <p className="career-hero-info">
              "At our core, we are driven by the belief that everyone should
              have the opportunity to discover and pursue their dream job. Our
              relentless dedication is focused on making this a reality. Join us
              now and take the first step toward your dream career!"
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            textAlign: "center",
          }}
          className="career-headings"
        >
          Opportunities
        </div>
        {Jobs.map((eachJob, index) => (
          <CareerComponent
            key={index}
            data={eachJob}
            showApplication={showApplication}
            setShowApplication={setShowApplication}
          />
        ))}
      </div>
      <div style={{ marginLeft: "80px", marginRight: "80px" }}>
        <div className="career-headings">Life @ Stacia Corp</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src={LifeStaciaImg1} alt="" className="Life-Img1" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <img src={LifeStaciaImg2} alt="" className="Life-Img2" />
              </div>
              <div>
                <img src={LifeStaciaImg3} alt="" className="Life-Img3" />
              </div>
            </div>
            <div>
              <img src={LifeStaciaImg4} alt="" className="Life-Img4" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "80px",
          marginRight: "80px",
          marginBottom: "250px",
        }}
      >
        <div className="career-headings">Our Culture</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="culture-titles">Office Environment</div>
            <p className="culture-contents">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
              tempor nunc nec habitant. Dolor vulputate tempor sagittis et
              maecenas praesent congue ac. Blandit in sagittis sem quis lectus
              aliquam. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div>
            <div className="culture-titles">Working Model</div>
            <p className="culture-contents">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
              tempor nunc nec habitant. Dolor vulputate tempor sagittis et
              maecenas praesent congue ac. Blandit in sagittis sem quis lectus
              aliquam. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="culture-titles">Co-workers Environment</div>
            <p className="culture-contents">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
              tempor nunc nec habitant. Dolor vulputate tempor sagittis et
              maecenas praesent congue ac. Blandit in sagittis sem quis lectus
              aliquam. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div>
            <div className="culture-titles">Yearly Trips</div>
            <p className="culture-contents">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas
              tempor nunc nec habitant. Dolor vulputate tempor sagittis et
              maecenas praesent congue ac. Blandit in sagittis sem quis lectus
              aliquam. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CareerPage;
