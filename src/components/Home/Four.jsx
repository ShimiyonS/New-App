import React from 'react'
import "../../styles/Four.css"
import FourCard from './FourCard'
import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import p4 from "../../assets/p4.png"

const fourData = [
  {
    id: 1,
    pos: 'Position',
    img: p1,
    name: 'Sarabesh Sriram',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur molestiae cupiditate aut tempora delectus maiores suscipit, incidunt perferendis odio nobis soluta unde quo natus magni dolorum doloribus veritatis dignissimos?'
  },
  {
    id: 2,
    pos: 'Position',
    img: p2,
    name: 'Reveanth',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur molestiae cupiditate aut tempora delectus maiores suscipit, incidunt perferendis odio nobis soluta unde quo natus magni dolorum doloribus veritatis dignissimos?'
  },
  {
    id: 3,
    pos: 'Position',
    img: p3,
    name: 'Lakshmanan',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur molestiae cupiditate aut tempora delectus maiores suscipit, incidunt perferendis odio nobis soluta unde quo natus magni dolorum doloribus veritatis dignissimos?'
  },
  {
    id: 4,
    pos: 'Position',
    img: p4,
    name: 'Gowtham',
    about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, pariatur molestiae cupiditate aut tempora delectus maiores suscipit, incidunt perferendis odio nobis soluta unde quo natus magni dolorum doloribus veritatis dignissimos?'
  }
];

export default function Four() {
  return (
    <div className='four'>
      <div className="four2">
        <div className="four-text">Foundation Four</div>
        <div className='four-grid'>
          {
            fourData.map((data) => (
              <FourCard data={data} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
