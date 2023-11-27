import React from 'react'
import reverse from "../../assets/reverse.png"

export default function MobileStackScroll() {
  return (
    <div className="mobile-stack-scroll">
      <div className="mobile-stack-card">
        <div style={{
          padding: '20px'
        }}>
          <div className="mobile-card-stack-title">Water Heating & Cooling Kettle</div>
          <div className="mobile-stack-domain">Domain Name</div>
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="mobile-card-stack-img-box">
            <img src={reverse} alt="" />
          </div>
        </div>

        <div style={{ padding: '20px' }}>
        <div className="mobile-card-stack-para">
          <p>Lorem ipsum dolor sit amet consectetur.
            Egestas ante vivamus convallis dictum aliquet
            tristique bibendum. </p>
        </div>
        <div className="mobile-card-stack-learn-more">
          Learn more
        </div>
        </div>
      </div>
      <div className="mobile-stack-card">
        <div style={{
          padding: '20px'
        }}>
          <div className="mobile-card-stack-title">Water Heating & Cooling Kettle</div>
          <div className="mobile-stack-domain">Domain Name</div>
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="mobile-card-stack-img-box">
            <img src={reverse} alt="" />
          </div>
        </div>

        <div style={{ padding: '20px' }}>
        <div className="mobile-card-stack-para">
          <p>Lorem ipsum dolor sit amet consectetur.
            Egestas ante vivamus convallis dictum aliquet
            tristique bibendum. </p>
        </div>
        <div className="mobile-card-stack-learn-more">
          Learn more
        </div>
        </div>
      </div>
      <div className="mobile-stack-card">
        <div style={{
          padding: '20px'
        }}>
          <div className="mobile-card-stack-title">Water Heating & Cooling Kettle</div>
          <div className="mobile-stack-domain">Domain Name</div>
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="mobile-card-stack-img-box">
            <img src={reverse} alt="" />
          </div>
        </div>

        <div style={{ padding: '20px' }}>
        <div className="mobile-card-stack-para">
          <p>Lorem ipsum dolor sit amet consectetur.
            Egestas ante vivamus convallis dictum aliquet
            tristique bibendum. </p>
        </div>
        <div className="mobile-card-stack-learn-more">
          Learn more
        </div>
        </div>
      </div>
    </div>
  )
}
