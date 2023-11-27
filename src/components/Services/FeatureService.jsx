import React from 'react'
import "../../styles/SingleService.css"
// import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'
// import SpecificService from './SpecificService'

export default function FeatureService({ img, description, title }) {
    return (
        <div className="feature-service">

            <div className="feature-service-img-box">
                <img src={img} alt="" />
            </div>

            <div className='feature-content'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} className='feature-first-title'>
                    <div className="feature-title">{title}</div>
                    <Link onClick={
                        () => window.scrollTo(0, 0)
                    } to={`${title}`} className="know-more">Know more</Link>
                </div>
                <div className="feature-para">
                    {
                        description.split(/\s+/, 30).join(" ")
                    }
                </div>
                <Link onClick={
                    () => window.scrollTo(0, 0)
                } to={`${title}`} className="know-more-mobile">Know more</Link>
            </div>

        </div>
    )
}
