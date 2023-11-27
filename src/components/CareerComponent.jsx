import React from "react";
import { useState } from "react";
import ExpIcon from "../assets/expIcon.svg";
import PayIcon from "../assets/payIcon.svg";
import ClockIcon from "../assets/clockIcon.svg";
import LocIcon from "../assets/locIcon.svg";
import ModeIcon from "../assets/ModeIcon.svg";
import ArrowUp from "../assets/arrowUP.svg";
import ArrowDown from "../assets/arrowDown.svg";
import FileLogo from "../assets/fileLogo.svg";
import Flag from "../assets/flag.png";

function CareerComponent({ data, showApplication, setShowApplication }) {
  const {
    jobName,
    experience,
    pay,
    type,
    location,
    mode,
    description,
    responsibilities,
    sectionDetails,
  } = data;
  const [showMore, setShowMore] = useState(false);
  const [formValues, setFormValues] = useState([]);
  let [slideNumber, setSlideNumber] = useState(0);
  const nextSlideHandler = () => {
    if (slideNumber === sectionDetails.length - 1) {
      setShowApplication(false);
      setSlideNumber(0);
      console.log(formValues);
    } else {
      setSlideNumber(slideNumber + 1);
    }
  };
  const ProgressPercent = parseInt(
    ((slideNumber + 1) / sectionDetails.length) * 100
  );
  const handleInputChange = (queId, e) => {
    setFormValues({ ...formValues, [queId]: e.target.value });
  };
  const handleOptionsChange = (queId, e) => {
    setFormValues({ ...formValues, [queId]: e.target.value });
  };
  return (
    <div>
      <div className="opportunities-container">
        <div>
          <div className="opportunity-items">
            <div className="opportunity-titles">{jobName}</div>
            <div
              className="job-arrow"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              <img src={showMore ? ArrowUp : ArrowDown} alt="" />
              { }
            </div>
          </div>
          {showMore && (
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={ExpIcon} alt="" />
                  <span className="job-details">{experience}Years</span>
                </div>
                <div className="career-seperator" />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={PayIcon} alt="" />
                  <span className="job-details">{pay}Lakhs</span>
                </div>
                <div className="career-seperator" />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={ClockIcon} alt="" />
                  <span className="job-details">{type}</span>
                </div>
                <div className="career-seperator" />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={LocIcon} alt="" />
                  <span className="job-details">{location}</span>
                </div>
                <div className="career-seperator" />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={ModeIcon} alt="" />
                  <span className="job-details">{mode}</span>
                </div>
              </div>
              <div className="job-description">{description}</div>
              <div className="responsibility-title">Responsibilities</div>
              {responsibilities.map((element, index) => {
                return (
                  <li key={index} className="responsibility-list">
                    {element}
                  </li>
                );
              })}
              <div
                className="career-apply"
                onClick={() => {
                  setShowApplication(true);
                }}
              >
                Apply
              </div>
              {showApplication && (
                <div className="application-overlay">
                  <div className="application-box">
                    <div className="application-job-title">{jobName}</div>
                    <div className="application-info">
                      Please Enter Required Details Given Below
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <progress
                        id="file"
                        value={slideNumber + 1}
                        max={sectionDetails.length}
                        style={{
                          width: "100%",
                          marginTop: "20px",
                          marginBottom: "20px",
                          height: "5px",
                        }}
                      ></progress>
                      <div style={{ marginLeft: "5px" }}>
                        {ProgressPercent}%
                      </div>
                    </div>

                    <div className="application-scroll">
                      <div style={{ marginRight: "2px" }}>
                        <div className="application-title">
                          {sectionDetails[slideNumber].title}
                        </div>
                        {sectionDetails[slideNumber].questionDetails.map(
                          (eachQuestion, index) => {
                            const { questionName, type, options, _id, name } =
                              eachQuestion;
                            return (
                              <div key={index}>
                                <div className="application-question">
                                  {questionName} {_id}
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {options.length ? (
                                    options.map((eachOption, index) => {
                                      return (
                                        <div
                                          key={index}
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                          }}
                                        >
                                          <div>
                                            <input
                                              type={type}
                                              name={name}
                                              id=""
                                              value={eachOption}
                                              onChange={(e) => {
                                                handleOptionsChange(_id, e);
                                              }}
                                            />
                                          </div>
                                          <div className="application-option">
                                            {eachOption}
                                          </div>
                                        </div>
                                      );
                                    })
                                  ) : type === "file" ? (
                                    <div className="input-overlay">
                                      <input
                                        type={type}
                                        name=""
                                        id=""
                                        className="input-file"
                                      />
                                      <img
                                        src={FileLogo}
                                        alt=""
                                        className="file-logo"
                                      />
                                    </div>
                                  ) : type === "number" ? (
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        height: "35px",
                                        borderRadius: "10px",
                                        border: "1px solid #cadbea",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: "15%",
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                      >
                                        <img src={Flag} alt="" />
                                      </div>
                                      <div
                                        style={{
                                          height: "80%",
                                          width: "2px",
                                          backgroundColor: "#ADADAD",
                                        }}
                                      ></div>
                                      <input
                                        type={type}
                                        onChange={(e) => {
                                          handleInputChange(_id, e);
                                        }}
                                        style={{
                                          border: "none",
                                          height: "96%",
                                          width: "85%",
                                          borderRadius: "10px",
                                        }}
                                      />
                                    </div>
                                  ) : (
                                    <input
                                      type={type}
                                      name=""
                                      id=""
                                      onChange={(e) => {
                                        handleInputChange(_id, e);
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "#0D0225",
                        opacity: 0.4,
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    />
                    <div
                      style={{
                        height: "80px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "5%",
                      }}
                    >
                      {slideNumber ? (
                        <button
                          className="application-btn"
                          onClick={() => {
                            setSlideNumber(slideNumber - 1);
                          }}
                        >
                          Back
                        </button>
                      ) : (
                        <button
                          className="application-btn"
                          onClick={() => {
                            setShowApplication(false);
                          }}
                        >
                          Close
                        </button>
                      )}
                      <button
                        className="application-btn"
                        onClick={nextSlideHandler}
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          border: "blue",
                        }}
                      >
                        {slideNumber === sectionDetails.length - 1
                          ? "Done"
                          : "Next"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="line-style" />
        </div>
      </div>
    </div>
  );
}

export default CareerComponent;
