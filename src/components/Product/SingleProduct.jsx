import React, { useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "../../styles/ProductDetails.css";
import { useParams } from "react-router-dom";
import chililanding from "../../assets/chililanding.png";
import onedrill from "../../assets/onedrill.png";
import child from "../../assets/child.png";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";

import spinach from "../../assets/spinach.png";
import slicing from "../../assets/slicing.png";
import baling from "../../assets/baling.png";
import speaker from "../../assets/speaker.png";
import stove from "../../assets/stove.png";
// import Model from "./Model";
import MobileFooter from "../MobileFooter";

export default function SingleProduct() {
  const productDetails = [
    {
      id: 1,
      name: "Chilli Ladling Machine",
      productImg: chililanding,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit animi ad ea aliquid eius porro harum fugiat, repellendus nulla a vel officia tempore alias? Ipsa similique quam temporibus id. Delectus optio, quia velit saepe, tempora in rerum ad illo beatae reprehenderit veniam sed labore! Debitis sunt similique esse consectetur vitae architecto ullam perspiciatis delectus, magnam molestiae iusto voluptatum quidem? Atque ipsam, expedita beatae quae exercitationem commodi culpa! Culpa voluptatem, distinctio fugit accusantium totam veritatis? Asperiores nihil nostrum consequuntur eius quae, veniam neque. Exercitationem tenetur, qui saepe nemo obcaecati fuga! ",
    },
    {
      id: 2,
      name: "One Drill",
      productImg: onedrill,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit animi ad ea aliquid eius porro harum fugiat, repellendus nulla a vel officia tempore alias? Ipsa similique quam temporibus id. Delectus optio, quia velit saepe, tempora in rerum ad illo beatae reprehenderit veniam sed labore! Debitis sunt similique esse consectetur vitae architecto ullam perspiciatis delectus, magnam molestiae iusto voluptatum quidem? Atque ipsam, expedita beatae quae exercitationem commodi culpa! Culpa voluptatem, distinctio fugit accusantium totam veritatis? Asperiores nihil nostrum consequuntur eius quae, veniam neque. Exercitationem tenetur, qui saepe nemo obcaecati fuga!",
    },
    {
      id: 3,
      name: "Stacia Child Tracking System",
      productImg: child,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit animi ad ea aliquid eius porro harum fugiat, repellendus nulla a vel officia tempore alias? Ipsa similique quam temporibus id. Delectus optio, quia velit saepe, tempora in rerum ad illo beatae reprehenderit veniam sed labore! Debitis sunt similique esse consectetur vitae architecto ullam perspiciatis delectus, magnam molestiae iusto voluptatum quidem? Atque ipsam, expedita beatae quae exercitationem commodi culpa! Culpa voluptatem, distinctio fugit accusantium totam veritatis? Asperiores nihil nostrum consequuntur eius quae, veniam neque. Exercitationem tenetur, qui saepe nemo obcaecati fuga!",
    },
    {
      id: 4,
      name: "Precision Slicing Machine",
      productImg: slicing,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit animi ad ea aliquid eius porro harum fugiat, repellendus nulla a vel officia tempore alias? Ipsa similique quam temporibus id. Delectus optio, quia velit saepe, tempora in rerum ad illo beatae reprehenderit veniam sed labore! Debitis sunt similique esse consectetur vitae architecto ullam perspiciatis delectus, magnam molestiae iusto voluptatum quidem? Atque ipsam, expedita beatae quae exercitationem commodi culpa! Culpa voluptatem, distinctio fugit accusantium totam veritatis? Asperiores nihil nostrum consequuntur eius quae, veniam neque. Exercitationem tenetur, qui saepe nemo obcaecati fuga!",
    },
    {
      id: 5,
      name: "Spinach Cleaning Machine",
      productImg: spinach,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit animi ad ea aliquid eius porro harum fugiat, repellendus nulla a vel officia tempore alias? Ipsa similique quam temporibus id. Delectus optio, quia velit saepe, tempora in rerum ad illo beatae reprehenderit veniam sed labore! Debitis sunt similique esse consectetur vitae architecto ullam perspiciatis delectus, magnam molestiae iusto voluptatum quidem? Atque ipsam, expedita beatae quae exercitationem commodi culpa! Culpa voluptatem, distinctio fugit accusantium totam veritatis? Asperiores nihil nostrum consequuntur eius quae, veniam neque. Exercitationem tenetur, qui saepe nemo obcaecati fuga!",
    },
    {
      id: 6,
      name: "Stacia Baling Machine",
      productImg: baling,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit animi ad ea aliquid eius porro harum fugiat, repellendus nulla a vel officia tempore alias? Ipsa similique quam temporibus id. Delectus optio, quia velit saepe, tempora in rerum ad illo beatae reprehenderit veniam sed labore! Debitis sunt similique esse consectetur vitae architecto ullam perspiciatis delectus, magnam molestiae iusto voluptatum quidem? Atque ipsam, expedita beatae quae exercitationem commodi culpa! Culpa voluptatem, distinctio fugit accusantium totam veritatis? Asperiores nihil nostrum consequuntur eius quae, veniam neque. Exercitationem tenetur, qui saepe nemo obcaecati fuga!",
    },
    {
      id: 7,
      name: "Connect S",
      productImg: speaker,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit animi ad ea aliquid eius porro harum fugiat, repellendus nulla a vel officia tempore alias? Ipsa similique quam temporibus id. Delectus optio, quia velit saepe, tempora in rerum ad illo beatae reprehenderit veniam sed labore! Debitis sunt similique esse consectetur vitae architecto ullam perspiciatis delectus, magnam molestiae iusto voluptatum quidem? Atque ipsam, expedita beatae quae exercitationem commodi culpa! Culpa voluptatem, distinctio fugit accusantium totam veritatis? Asperiores nihil nostrum consequuntur eius quae, veniam neque. Exercitationem tenetur, qui saepe nemo obcaecati fuga!",
    },
    {
      id: 8,
      name: "Butterfly 3-burner Stove",
      productImg: stove,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugit animi ad ea aliquid eius porro harum fugiat, repellendus nulla a vel officia tempore alias? Ipsa similique quam temporibus id. Delectus optio, quia velit saepe, tempora in rerum ad illo beatae reprehenderit veniam sed labore! Debitis sunt similique esse consectetur vitae architecto ullam perspiciatis delectus, magnam molestiae iusto voluptatum quidem? Atque ipsam, expedita beatae quae exercitationem commodi culpa! Culpa voluptatem, distinctio fugit accusantium totam veritatis? Asperiores nihil nostrum consequuntur eius quae, veniam neque. Exercitationem tenetur, qui saepe nemo obcaecati fuga!",
    },
  ];

  const slides = [
    {
      title: "Chili Landing Machine",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium illum veniam corporis tempore. Fuga earum, maiores possimus quo, dicta vero dolor laborum sint cum voluptas, quod nobis sed. Nemo, perspiciatis.",
      image: chililanding,
      alt: "Image 1",
    },
    {
      title: "Stacia Child Tracking System",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium illum veniam corporis tempore. Fuga earum, maiores possimus quo, dicta vero dolor laborum sint cum voluptas, quod nobis sed. Nemo, perspiciatis.",
      image: child,
      alt: "Image 2",
    },
    {
      title: "One Drill",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium illum veniam corporis tempore. Fuga earum, maiores possimus quo, dicta vero dolor laborum sint cum voluptas, quod nobis sed. Nemo, perspiciatis.",
      image: onedrill,
      alt: "Image 2",
    },
  ];

  const { productName } = useParams();
  const thisProduct = productDetails.find((prod) => prod.name === productName);

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  return (
    <>
      <NavBar />
      <div className="product-details">
        <div className="product-details2">
          <div style={{ marginTop: "40px" }}>
            <div className="single-product-name">{thisProduct.name}</div>
            <div className="product-category">Product category</div>
          </div>
          <div className="single-pro-container">
            <div className="single-pro-container2">
              <div className="single-pro-overview">Overview</div>
              <p className="desc">{thisProduct.description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="product-3d-img">
                <div className="img-box">
                    <img src={thisProduct.productImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: '100%', textAlign: 'end', fontSize: '18px', fontWeight: '900', color: 'rgba(13, 2, 37, 0.20)' }}>Rotate the Object for Real Experience</div>
            </div> */}

      {/* <Model /> */}
      <div className="rotate-text">
        <div className="mobile-rotate-text">
          Rotate the Object for Real Experience
        </div>
      </div>

      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="split-screen-carousel">
          <div className="split">
            <div className="image-area">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
              />
            </div>
            <div className="text-area">
              <div className="paras">
                <p>{slides[currentSlide].title}</p>
                <p> {slides[currentSlide].text}</p>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className="skip">Skip</p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <div
                    onClick={previousSlide}
                    style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  >
                    <img
                      src={prev}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div
                    onClick={nextSlide}
                    style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  >
                    <img
                      src={next}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-desc">
        <div className="pro-title">{thisProduct.name}</div>
        <div className="prodesc">{thisProduct.description}</div>
      </div>

      <Footer />
      <MobileFooter />
    </>
  );
}
