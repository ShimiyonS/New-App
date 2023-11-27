import React from 'react'
import "../../styles/Testimonials.css"
import t1 from "../../assets/t1.png"

export default function TestimonialCard() {
  return (
    <div className='testimonial-card'>
        <div className="test-top">
            <div className="test-img">
                <img src={t1} alt="" />
            </div>
            <div className="test-name">
                <p>Lakshmanan</p>
                <p>CEO, Infosys</p>
            </div>
        </div>
        <div className="test-line"></div>
        <div className="test-bottom">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestias praesentium quis fugit quas rem autem, totam sunt minima dolores accusamus voluptatibus debitis pariatur"</p>
        </div>
    </div>
  )
}
