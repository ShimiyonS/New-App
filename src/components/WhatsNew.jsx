import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";

const whatsNewData = [
  {
    type: 'events',
    data: [
      {
        eventTitle: 'Designer Mindset',
        img: event1,
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: event2,
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: event3,
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      }
    ]
  },
  {
    type: 'productsupdate',
    data: [
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      }
    ]
  },
  {
    type: 'casestudy',
    data: [
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      }
    ]
  },
  {
    type: 'blogpost',
    data: [
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      }
    ]
  },
  {
    type: 'achivements',
    data: [
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      },
      {
        eventTitle: 'Designer Mindset',
        img: '',
        eventOverview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod '
      }
    ]
  },
];

export default function WhatsNew() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [whatsNew, setWhatsNew] = useState([]);
  const [params1, setParams1] = useState("events");

  const setParams = (query) => {
    console.log(query);
    setSearchParams({ type: query });
    setParams1(query);
    setWhatsNew(whatsNewData.filter((data) => data.type === query));
  };

  useEffect(() => {
    setParams("events");
  },[]);

  console.log(whatsNew);

  return (
    <div className="whats-new">
      <div className="whats-new-left">
        <div className="whats-new-links">
          <div className="whats-new-link" onClick={() => setParams("events")} >Events</div>
          <div className="whats-new-link" onClick={() => setParams("productsupdate")}>Product's Updates</div>
          <div className="whats-new-link" onClick={() => setParams("casestudy")}>Case Study</div>
          <div className="whats-new-link" onClick={() => setParams("blogpost")}>Blog Post</div>
          <div className="whats-new-link" onClick={() => setParams("achivements")}>Achivements</div>
        </div>
      </div>
      <div className="whats-new-right">
        <div className="whats-new-grid">
          <div className="whats-new-grid-left">
            <img src={event1} alt="" />
          </div>
          <div className="whats-new-grid-right">
            <div className="whats-new-grid-top">
              <img src={event2} alt="" />
            </div>
            <div className="whats-new-grid-bottom">
              <img src={event3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
