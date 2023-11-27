import React from 'react'
import { useParams } from 'react-router-dom';
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import NavBar from '../NavBar';
import Footer from '../Footer';
import "../../styles/Services/SpecificServices.css"
// import machine from "../../assets/serviceHeroImg.png"
import WhatWeDoCard from './WhatWeDoCard';
// import AccordionOpen from "../../assets/Expand.png";
// import AccordionClose from "../../assets/CloseAccordion.png";
import WhatWeDoAccordion from './WhatWeDoAccordion';
import MobileFooter from '../MobileFooter';

const services = [
    {
        feature: true,
        whatWeDo: [
            {
                title: 'Ready to Manufacture Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Innovative Machine Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Problem Solving',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'End-of-Arm Tooling',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Designers on Demand',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Concept Development',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
        ],
        img: s1,
        serviceTitle: 'Project Documentation',
        description: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
    },
    {
        feature: false,
        whatWeDo: [
            {
                title: 'Ready to Manufacture Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Innovative Machine Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Problem Solving',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'End-of-Arm Tooling',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Designers on Demand',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Concept Development',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
        ],
        img: s2,
        serviceTitle: 'Machine Design',
        description: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
    },
    {
        feature: false,
        whatWeDo: [
            {
                title: 'Ready to Manufacture Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Innovative Machine Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Problem Solving',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'End-of-Arm Tooling',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Designers on Demand',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Concept Development',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
        ],
        img: s3,
        serviceTitle: 'Cad Modeling',
        description: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
    },
    {
        feature: false,
        whatWeDo: [
            {
                title: 'Ready to Manufacture Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Innovative Machine Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Problem Solving',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'End-of-Arm Tooling',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Designers on Demand',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Concept Development',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
        ],
        img: s4,
        serviceTitle: '3D Modeling',
        description: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
    },
    {
        feature: false,
        whatWeDo: [
            {
                title: 'Ready to Manufacture Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Innovative Machine Design',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Problem Solving',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'End-of-Arm Tooling',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Designers on Demand',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
            {
                title: 'Concept Development',
                desc: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
            },
        ],
        img: s5,
        serviceTitle: 'Ansys',
        description: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ',
    }
];

export default function SpecificService() {
    const { serviceName } = useParams();
    const thisService = services.find((service) => service.serviceTitle === serviceName);
    // const [accordion, setAccordion] = useState(0);

    return (
        <>
            <NavBar />
            {/* <div className='specific-service-section1'>
                <div className='specific-service-overlay'>
                    <div className="specific-service-title">{thisService.serviceTitle}</div>
                    <div className="specific-service-content">
                        <div className='specific-service-content-left'>
                            <div className="specific-service-overview">Overview</div>
                            <div className="specific-service-desc">
                                <p>{thisService.description}</p>
                            </div>
                            <div className="get-a-free-quote">Get free quote</div>
                        </div>
                        <div className="specific-service-content-right">
                            <div className="specific-service-content-img-box">
                                <img src={machine} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="service-hero-container">
                <div className="service-hero-section">
                    {/* <div>
            <div className="service-title">Our Services</div>
            <div className="service-overview-title">overview</div>
            <div className="service-hero-content">
              Lorem ipsum dolor sit amet consectetur. Eget ut risus venenatis ut
              tincidunt porttitor vitae mauris rhoncus. Habitant pharetra
              tincidunt cras sed faucibus morbi tincidunt nibh. Integer risus
              pellentesque phasellus ultrices pellentesque odio eget. Egestas ut
              facilisi orci id dui odio at. Turpis elit fames in lobortis.
              Pharetra orci vitae sed nisi suspendisse dignissim in. Quis eu
              morbi cras orci sit. Lorem ipsum dolor sit amet consectetur. Eget
              ut risus venenatis ut tincidunt porttitor vitae mauris rhoncus.
              Habitant pharetra tincidunt cras sed faucibus morbi tincidunt
              nibh. Integer risus pellentesque
            </div>
          </div>
          <div>
            <img src={ServiceHeroImg} alt="" className="service-hero-img" />
          </div> */}
                    <div className="service-title">{thisService.serviceTitle}</div>
                    <div className="service-section1-content-box">
                        <div className="service-section-left">
                            <div className="service-overview-title">Overview</div>
                            <p>
                                {thisService.description}
                            </p>
                            <div className="get-a-free-quote">Get a free quote</div>
                        </div>
                        <div className="service-section-right">
                            <div className="service-section-right-imgbox">
                                <img src={thisService.img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="specific-service-section2">
                <div className="whatwedo">
                    What We Do ?
                </div>
                <div className="what-we-do-grid">
                    {
                        thisService.whatWeDo.map((data) => <WhatWeDoCard title={data.title} desc={data.desc} />)
                    }
                </div>
                <div className="what-we-do-accordion-container">
                    {
                        thisService.whatWeDo.map((data) => <WhatWeDoAccordion title={data.title} desc={data.desc} />)

                    }
                </div>
            </div>
            <Footer />
            <MobileFooter />
        </>
    )
}
