import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductComponent1({ bgColor ,bigText, productName, ProductDescription, productImg }) {
  return (
    <div className="p-section pro2" style={{backgroundColor: bgColor}}>
          <div className="product-name p1">{bigText}</div>
          <div className="pro2-container">
            <div className="pro2-left">
              <div className="pname">{productName}</div>
              <p style={{ marginTop: '30px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic nostrum quisquam illo facilis illum consequuntur quos natus repudiandae debitis? Ab atque debitis necessitatibus repudiandae nam, obcaecati dolor. Id, molestias.</p>
              <div>
                <Link to={`/product/${productName}`} target='_blank' className="learn-more-btn">Learn more</Link>
              </div>
            </div>
            <div className="pro2-right">
              <img src={productImg} alt="" style={{zIndex: '2', height: '100%', width: '100%', objectFit: 'contain'}} />
            </div>
          </div>
    </div>
  )
}
