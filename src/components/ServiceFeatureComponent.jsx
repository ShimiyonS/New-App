import React from "react";
import { useState } from "react";
import "../styles/services.css";
import { serviceData } from "../data/servicesData";
import ServiceDefaultImg from "../assets/serviceDefaultImg.png";

function ServiceFeatureComponent() {
  const [services] = useState(serviceData);
  return (
    <div>
      {services.map((eachService, index) => {
        const { title, heading, featured, image } = eachService;
        return (
          <div key={index}>
            {featured && (
              <div>
                <div>
                  <img
                    src={image ? image : ServiceDefaultImg}
                    alt={title}
                    className="feature-image-container"
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="component-title">{title}</div>
                    <div className="component-heading">{heading}</div>
                  </div>
                  <div className="component-btn feature-btn">
                    Get A Free Quote
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ServiceFeatureComponent;
