import React from 'react'
import ServiceCard from './ServiceCard'

export default function AllServiceCard({ data }) {
  return (
    <div className="all-service-box">
        {
            data.map((data) => 
                data.feature === false && <ServiceCard img={data.img} title={data.serviceTitle} description={data.description} />
            )
        }
    </div>
  )
}
