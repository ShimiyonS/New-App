import React from "react";
import { useState } from "react";
import ServiceDefaultImg from "../assets/serviceDefaultImg.png";
import { serviceData } from "../data/servicesData";
import "../styles/services.css";

function ServiceComponent() {
  const [services] = useState(serviceData);

  return (
    <div className="component-container">
      {services.map((eachService, index) => {
        const { title, heading, featured, image } = eachService;
        return (
          <div key={index}>
            {!featured && (
              <div className="component-map-container">
                <div>
                  <img
                    src={image ? image : ServiceDefaultImg}
                    alt={title}
                    srcset=""
                    className="component-image-container"
                  />
                </div>
                <div className="component-title">{title}</div>
                <div className="component-heading">{heading}</div>
                <div className="component-btn">Get A Free Quote</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ServiceComponent;
