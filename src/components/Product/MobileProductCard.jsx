import React from 'react'
// import mobileOneDril from "../../assets/mobileOneDril.png";
import { Link } from 'react-router-dom';

export default function MobileProductCard({ proName, proImg, color, proDesc }) {
    return (
        <div className="mobile-product-card" style={{ backgroundColor: color }}>
            <div className="mb-product-card-title">One dril</div>
            <div className="mb-pro-img-box">
                <img src={proImg} alt="" />
            </div>
            <div className="pro-head">
                {proName}
            </div>

            <div className="pro-para">
                <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. </p>
            </div>

            <Link className="mb-pro-read-more" to={`/product/${proName}`} onClick={() => window.scrollTo(0, 0)} >
                Read more
            </Link>
        </div>
    )
}
