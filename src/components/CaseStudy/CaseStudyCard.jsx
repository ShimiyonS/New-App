import React from 'react'
import "../../styles/CaseStudy.css"
import { Link } from 'react-router-dom'

export default function CaseStudyCard({ content, type, img, tags, title }) {
  return (
    <Link className='case-study-card' to={`/case-study?/type=${type}/${title}`} >
      <div className="case-study-img-box" style={{ backgroundImage: `url(${img})` }}>
      <div className="case-study-card-top">
        <div style={{ color: '#fff' }}>{title}</div>
        <div style={{ display: 'flex', gap: '20px' }}>
        {
          tags.map((tag) => (
            <div className='case-tag'>{tag}</div>
          ))
        }
        </div>
      </div>
        <img src={img} alt="" />
      </div>
    </Link>
  )
}
