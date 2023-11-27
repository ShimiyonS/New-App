import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/services.css";
import ServiceHeroImg from "../assets/serviceHeroImg.png";
// import ServiceComponent from "../components/ServiceComponent";
// import ServiceFeatureComponent from "../components/ServiceFeatureComponent";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
// import ServiceCard from "../components/Services/ServiceCard";
import AllServiceCard from "../components/Services/AllServiceCard";
import FeatureService from "../components/Services/FeatureService";
import MobileFooter from "../components/MobileFooter";

const services = [
  {
    feature: true,
    img: s1,
    serviceTitle: 'Project Documentation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.'
  },
  {
    feature: false,
    img: s2,
    serviceTitle: 'Machine Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.'
  },
  {
    feature: false,
    img: s3,
    serviceTitle: 'Cad Modeling',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.'
  },
  {
    feature: false,
    img: s4,
    serviceTitle: '3D Modeling',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.'
  },
  {
    feature: false,
    img: s5,
    serviceTitle: 'Ansys',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod alias facilis nihil placeat odio ipsum, esse nam est dicta quisquam mollitia, nobis suscipit quasi architecto incidunt numquam repudiandae aut.Nemo ipsam accusamus minima incidunt quibusdam, qui omnis quos aut? Illum quod quisquam hic perspiciatis tenetur provident quasi ad tempore nulla libero enim ipsa, aut impedit numquam, nesciunt dolorum inventore! Perferendis laboriosam dolorum impedit numquam magni corporis ipsum quo inventore et soluta reiciendis asperiores, dolore nihil dignissimos nulla recusandae natus eius adipisci itaque quae dicta libero voluptate deserunt! Dolore, sint! Natus error debitis iste, soluta sapiente dignissimos? Doloremque asperiores delectus iste odit molestiae, quo et aperiam dolorem incidunt cumque repellat ipsam rem vitae! Maiores eum sunt asperiores aspernatur est a.'
  },

];

function ServicePage() {
  return (
    <>
      <NavBar />
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
          <div className="service-title">Our Services</div>
          <div className="service-section1-content-box">
            <div className="service-section-left">
              <div className="service-overview-title">Overview</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aspernatur omnis dolores. Laudantium quod ex veniam magnam. Officiis quibusdam accusantium sit, dolorum, sapiente dicta illo tempora veniam omnis magni ab?
                Expedita laborum fugiat esse, ratione est ipsum tempore, repellat minima a explicabo illo voluptate eius architecto odit. Eligendi, nam ea vitae exercitationem, expedita ducimus pariatur voluptatem, libero consequatur in nostrum!</p>
            </div>
            <div className="service-section-right">
              <div className="service-section-right-imgbox">
                <img src={ServiceHeroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ marginLeft: "80px", marginRight: "80px" }}>
        <ServiceFeatureComponent />
        <div>
          <ServiceComponent />
        </div>
      </div> */}

      <div className="all-services">
        {
          services.map((data) => (
            data.feature && <FeatureService feature={data.feature} img={data.img} description={data.description} title={data.serviceTitle} />
          ))
        }
        <AllServiceCard data={services} />
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default ServicePage;
