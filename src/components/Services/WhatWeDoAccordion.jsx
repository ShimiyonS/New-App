import React, { useState } from 'react'
import OpenAccordion from "../../assets/Expand.png";
// import Accordion from "../../assets/CloseAccordion.png";

export default function WhatWeDoAccordion({ title, desc }) {
    const [accordion, setAccordion] = useState(0);

    return (
        <div className="what-we-do-accordion">
            <div className="what-we-accordion-top" onClick={() => setAccordion(!accordion)}>
                <div className="accordion-title">{title}</div>
                <img src={OpenAccordion} alt="" />
            </div>
            {
                accordion ? (
                    <div className="accordion-para">
                        <p>{desc}</p>
                        <div className="accordion-btn">
                            Get a free quote
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}
