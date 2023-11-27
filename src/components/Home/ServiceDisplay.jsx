import React, { useEffect } from 'react'
import p1 from "../../assets/baling.png";
import p2 from "../../assets/spinach.png";
import p3 from "../../assets/speaker.png";
import arrow from "../../assets/arrow.png";
import activearrow from "../../assets/active-arrow.png";

import { useState } from 'react';

const serviceData = [
    {
        id: 1,
        name: 'MACHINE DESIGNS',
        img: p1
    },
    {
        id: 2,
        name: 'CAD MODELING',
        img: p2
    },
    {
        id: 3,
        name: '3D MODELING',
        img: p3
    },
    {
        id: 4,
        name: 'ANSYS',
        img: p1
    },
    {
        id: 5,
        name: 'PROTOTYPING',
        img: p2
    },
    {
        id: 6,
        name: 'PROJECT DOCUMENTATION',
        img: p3
    },
]

export default function ServiceDisplay() {
    console.log("rendered!!!")

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % serviceData.length);
        }, 3000);


        return () => clearInterval(interval);
    });



    return (
        <div className='service-display'>
            <div className="our-service-display-title">Our Services</div>
            <div className="service-display1">
                <div className="service-left">

                    <div className='service-img-box'>
                        <img src={serviceData[currentSlide].img} alt="" />
                    </div>

                </div>
                <div className="service-right">
                    <div style={{ height: '1px', width: '100%', backgroundColor: '#0D022566', marginBottom: '10px' }}></div>
                    {
                        serviceData.map((data) => (
                            <div className='service-text-box'>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    {serviceData[currentSlide].name === data.name ? <div className='service-text'>{serviceData[currentSlide].name}</div> : <div className='service-text1'>{data.name}</div>}
                                    {
                                        serviceData[currentSlide].name === data.name ? <img src={activearrow} alt="" /> : <img src={arrow} alt="" />
                                    }
                                </div>
                                {serviceData[currentSlide].name === data.name ? <div className='box-line'></div> : <div className='box-line1'></div>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
