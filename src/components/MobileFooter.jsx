import React, { useState } from 'react'
import arrow from "../assets/ContactArrow.svg"
import expand from "../assets/Expand.png"
import "../styles/footer.css"
import InstaIcon from "../assets/InstaIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import FBICon from "../assets/FBIcon.svg";
import LinkedIcon from "../assets/LinkedIcon.svg";

const footerAccordion = [
    {
        category: 'Company',
        links: [
            'Company', 'Careers', 'Contact'
        ]
    },
    {
        category: 'Product',
        links: [
            'Services', 'Products', 'Projects'
        ]
    },
    {
        category: 'Resources',
        links: [
            'Community', 'Whats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ', 'Projects'
        ]
    }
]

function FooterAccordion({ data }) {
    const [accordion, setAccordion] = useState(0);
    return (
        <div className="footer-accordion">
            <div className="footer-accordion-top" onClick={() => setAccordion(!accordion)}>
                <p>{data.category}</p>
                <div>
                    <img src={expand} alt="" />
                </div>
            </div>
            {
                accordion ?
                    data.links.map((link) => (
                        <div className='mbfooter-links'>{link}</div>
                    )) : ''
            }
            <div className='foo-line'></div>
        </div>
    )
}

export default function MobileFooter() {
    return (
        <div className="mobile-footer">
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: '20px' }}>
                <img src={arrow} alt="" />
                <div className="contact-text">Contact</div>
            </div>

            <div style={{ marginLeft: '20px' }}>
                <div className="keep-text">Keep in touch</div>
                <div className="contact-us-btn">
                    Contact Us
                </div>
            </div>

            <div style={{ marginLeft: '20px' }}>
                <div className="start-conversation">Start a Conversation</div>
            </div>

            <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="contact-mails">Contact@staciacorp.com</div>
                <div className="contact-mails">+91-8754595641</div>
            </div>

            <div>
                {
                    footerAccordion.map((data) => (
                        <FooterAccordion data={data} />
                    ))
                }
            </div>

            <div className="socialLinks">
                <div className="social-link"><img src={InstaIcon} alt="" /></div>
                <div className="social-link"><img src={TwitterIcon} alt="" /></div>
                <div className="social-link"><img src={FBICon} alt="" /></div>
                <div className="social-link"><img src={LinkedIcon} alt="" /></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '23px', marginLeft: '20px'}}>
                <div className="terms">Terms of service</div>
                <div className='dot'></div>
                <div className="terms">Privacy Policy</div>
            </div>

            <div className="copy-rights">© Copyright StaciaCorp. All Rights Reserved</div>

        </div>
    )
}
