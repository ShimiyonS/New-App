import React from 'react'
import "../../styles/Testimonials.css"
// import TestimonialCard from './TestimonialCard'
import Marquee from "react-fast-marquee";
import AllTestimonials from './AllTestimonials';

export default function Testimonials() {
    return (
        <div className='testimonials'>
            <div className='testimonials2'>
            <div>
                <Marquee speed={120} pauseOnHover>
                    <AllTestimonials />
                </Marquee>
            </div>

            <div className='right-marquee'>
                <Marquee speed={120} pauseOnHover direction='right'>
                    <AllTestimonials />
                </Marquee>
            </div>
            </div>

        </div>
    )
}
