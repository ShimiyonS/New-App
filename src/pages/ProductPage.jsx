import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../../src/styles/Product.css";
// import onedrilleft from "../assets/onedrilleft.png";
// import onedrilright from "../assets/onedrilright.png";
// import onedrilup from "../assets/onedrilup.png";
import chililanding from "../assets/chililanding.png";
import slicing from "../assets/slicing.png";
import spinach from "../assets/spinach.png";
import baling from "../assets/baling.png";
import child from "../assets/child.png";
import speaker from "../assets/speaker.png";
import stove from "../assets/stove.png";
// import ProductComponent1 from "../components/Product/ProductComponent1";
import ProductComponent2 from "../components/Product/ProductComponent2";
import { Link } from "react-router-dom";
import MobileFooter from "../components/MobileFooter";
import MobileProduct from "../components/Product/MobileProduct";

const productData = [
  {
    id: 1,
    img: chililanding,
    color: "#F0F3FD",
    bigText1: "chili ladling",
    productName: "Chilli Ladling Machine",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    id: 2,
    img: slicing,
    color: "#EAEFFC",
    bigText1: "precision",
    bigText2: "slicing",
    productName: "Precision Slicing Machine",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    id: 3,
    img: spinach,
    color: "#E5EAFA",
    bigText1: "spinach",
    bigText2: "cleaning",
    productName: "Spinach Cleaning Machine",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    id: 4,
    img: baling,
    color: "#E0E5F8",
    bigText1: "stacia baling",
    productName: "Stacia Baling Machine",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    id: 5,
    img: child,
    color: "#DBE1F7",
    bigText1: "child",
    productName: "Stacia Child Tracking System",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    id: 6,
    img: speaker,
    color: "#D5DCF5",
    bigText1: "connect s",
    productName: "Connect S",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    id: 7,
    img: stove,
    color: "#D0D7F3",
    bigText1: "burner stove",
    productName: "Butterfly 3-burner Stove",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. ",
  },
];

function ProductPage() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="nav_style">
        <NavBar />
      </div>
      <div className="product_container">
        <div className="product_section p-section">
          <div className="product_text">Stacia Corp Products</div>
          <div className="product_description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              consectetur dolores possimus quasi accusantium, suscipit doloribus
              placeat rerum corrupti. Laudantium illo sunt dolore, similique
              repellendus blanditiis ex dolorem facere quasi?
            </p>
          </div>
        </div>

        {/* product 1 */}
        <div className="p-section">
          <div className="p-top">
            <div className="p-name">One Dril</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              repellendus laudantium commodi? Culpa fuga velit ipsam qui
              voluptates unde illum nulla praesentium consectetur eligendi a,
              pariatur hic aspernatur magni nemo!
            </p>
            <Link
              to={`/product/One Drill`}
              onClick={() => window.scrollTo(0, 0)}
              className="learn-more-btn"
            >
              Learn more
            </Link>
          </div>
          <div className="p-bottom">
            <div className="p-mask">
              <div className="product-name">One dril</div>
            </div>
          </div>
        </div>

        {/* product 2 */}

        {/* <ProductComponent1 bgColor={'#F9F6FF'} bigText={'chili ladling'} productName={'Chili Ladling Machine'} productImg={chililanding} /> */}

        {/* product 3 */}

        {/* <div className="p-section pro3">
          <div className="product-name p1">Precision</div>
          <div className="pro2-container">
            <div className="pro2-left">
              <div className="pname">Precision Slicing Machine</div>
              <p style={{ marginTop: '30px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic nostrum quisquam illo facilis illum consequuntur quos natus repudiandae debitis? Ab atque debitis necessitatibus repudiandae nam, obcaecati dolor. Id, molestias.
              </p>
              <div className="learn-more-btn">Learn more</div>
            </div>
            <div className="pro3-right">
              <div className="product-name">slicing</div>
            </div>
          </div>
        </div> */}

        {/* <ProductComponent2 bgColor={'#F3EDFF'} bigText1={'Precision'} bigText2={'Slicing'} productImg={slicing} />
        <ProductComponent2 bgColor={'#ECE3FF'} bigText1={'Spinach'} bigText2={'Cleaning'} productImg={spinach} />

        <ProductComponent1 bgColor={'#E5DAFF'} bigText={'stacia baling'} productName={'Stacia Baling Machine'} productImg={baling} />
        <ProductComponent1 bgColor={'#DFD0FF'} bigText={'child tracking'} productImg={child} productName={'Stacia Child Tracking System'} />
        <ProductComponent1 bgColor={'#D9C6FF'} bigText={'connect s'} productImg={speaker} productName={'Connect S'} />
        <ProductComponent1 bgColor={'#D2BDFF'} bigText={'3-Burner'} productImg={stove} productName={'Butterfly 3-Burner Stove'} /> */}

        {productData.map((data) => (
          <ProductComponent2
            bigText1={data.bigText1}
            productName={data.productName}
            productImg={data.img}
            bigText2={data.bigText2}
            bgColor={data.color}
          />
        ))}
      </div>
      <MobileProduct />
      <Footer />
      <MobileFooter />
    </>
  );
}

export default ProductPage;
