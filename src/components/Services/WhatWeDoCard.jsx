import React from 'react'

export default function WhatWeDoCard({ title, desc }) {
  return (
    <div className="what-we-do-box">
        <div className="what-title">{title}</div>
        <div className="what-para">
            <p>{desc}</p>
        </div>
        <div className="free-quote">
            Get A Free Quote
        </div>
    </div>
  )
}
