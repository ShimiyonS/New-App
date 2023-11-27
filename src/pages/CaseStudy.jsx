import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "../styles/CaseStudy.css"
// import { Outlet } from 'react-router-dom'
import ResourceNavBar from '../components/Resource/ResourceNavBar'
// import CaseStudyCard from '../components/CaseStudy/CaseStudyCard'

export default function CaseStudy() {
  return (
    <>
      <NavBar />
      <div className="case-study-section1">
        <div className="case-study-section-overlay">
          <div className="case-study-title1">
            Lorem ipsum dolor
          </div>
          <div className="case-study-text">Case Study</div>
          <div className="case-study-text">Lorem</div>
        </div>
      </div>

      <div className="case-study-section2">
        <ResourceNavBar />

      </div>
      <Footer />
    </>
  )
}
