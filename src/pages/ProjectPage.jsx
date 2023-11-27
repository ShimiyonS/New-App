import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/projects.css";
import ProductDefault from "../assets/projectDefaultImage.png";
import { ProjectData } from "../data/projectData";
import { useState } from "react";

function ProjectPage() {
  const [projectData] = useState(ProjectData);
  const firstproduct = projectData.Projects[0];
  console.log(firstproduct);
  const { title, Image1 } = firstproduct;
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <div className="project-hero-section">
            <div className="project-hero-title">{title}</div>
          </div>
          <div>
            <img
              src={Image1 ? Image1 : ProductDefault}
              alt=""
              className="main-img-1"
            />
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
