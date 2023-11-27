import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductComponent2({ bgColor, bigText1, bigText2, productName, productImg }) {
    return (
        <div className="p-section pro3" style={{ backgroundColor: bgColor, }}>
            <div className="product-name p1">{bigText1}</div>
            <div className="pro2-container">
                <div className="pro2-left">
                    <div className="pname">{productName}</div>
                    <p style={{ marginTop: '30px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic nostrum quisquam illo facilis illum consequuntur quos natus repudiandae debitis? Ab atque debitis necessitatibus repudiandae nam, obcaecati dolor. Id, molestias.</p>
                    <Link className="learn-more-btn" to={`/product/${productName}`} onClick={() => window.scrollTo(0, 0)} >Read more</Link>
                </div>
                <div className="pro3-right">
                    <div className="slice">{bigText2}</div>
                    <div className="pro3-right-img">
                        <img src={productImg} alt="" style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
