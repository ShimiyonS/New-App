import React, { useEffect, useState } from "react";
import "../../styles/Resource.css";
import { useSearchParams } from "react-router-dom";
import CaseStudyCard from "../CaseStudy/CaseStudyCard";
// import { type } from '@testing-library/user-event/dist/type';
import s1 from "../../assets/study1.png";
import s2 from "../../assets/study2.png";
import s3 from "../../assets/study3.png";
import s4 from "../../assets/study4.png";
import s5 from "../../assets/study5.png";
import s6 from "../../assets/study6.png";

const data = [
  {
    type: "technology",
    img: s1,
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    img: s2,
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "culture",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    img: s3,
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    img: s4,
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "entertainment",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "agriculture",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "culture",
    tags: ["Lorem", "Loading", "Loading"],
    title: "Lorem ipsum dolor sit omet",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "culture",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "agriculture",
    title: "Lorem ipsum dolor sit omet",
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    title: "Lorem ipsum dolor sit omet",
    img: s5,
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
  {
    type: "technology",
    title: "Lorem ipsum dolor sit omet",
    img: s6,
    tags: ["Lorem", "Loading", "Loading"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa necessitatibus animi quia exercitationem, veritatis cum hic eveniet sapiente molestias eos! Totam recusandae facilis saepe? Vero aliquid reiciendis incidunt placeat.",
  },
];

data.map((data) => console.log(data.tags[0]));

export default function ResourceNavBar() {
  const [setSearchParams] = useSearchParams();
  const [caseStudy, setCaseStudy] = useState([]);
  const [setParams1] = useState("technology");
  // const [activeTab, setActiveTab] = useState(1);
  const setParams = (query) => {
    console.log(query);
    setSearchParams({ type: query });
    setParams1(query);
    setCaseStudy(data.filter((data) => data.type === query));
  };

  useEffect(() => {
    // setSearchParams({ type: "technology" });
    // setCaseStudy(data.filter((data) => data.type === "technology"));
    setParams("technology");
  });

  // caseStudy.map((data) => (
  //   console.log(data.type)
  // ))

  return (
    <>
      <div className="resource-nav-bar">
        <div className="resource-nav-links">
          <div
            className="resource-link"
            onClick={() => setParams("technology")}
          >
            Technology
          </div>
          <div
            className="resource-link"
            onClick={() => setParams("agriculture")}
          >
            Agriculture
          </div>
          <div className="resource-link" onClick={() => setParams("culture")}>
            Culture
          </div>
          <div
            className="resource-link"
            onClick={() => setParams("entertainment")}
          >
            Entertainment
          </div>
        </div>
      </div>

      <div className="case-study-grid">
        {caseStudy.map((data, index) => (
          <>
            <CaseStudyCard
              key={index}
              content={data.content}
              type={data.type}
              img={data.img}
              tags={data.tags}
              title={data.title}
            />
          </>
        ))}
      </div>
    </>
  );
}
