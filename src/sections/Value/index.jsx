import React from "react";
import "./style.css";
import Heading from "../../components/Heading";
import Valueimg from "../../assets/value-img.jpg";
import { BookIcon, DiamondIcon } from "../../components/Icons";

const ValueSection = () => {
  return (
    <div className="value__section">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6"  data-aos="fade-right"
                data-aos-offset="300"
               >
              <div className="value__head-title">
              <Heading
                className="text-white"
                type="medium"
                label="OUR VALUE"
                title="If you can laugh together, you can work together."
                desc="Foster collaboration and synergy by sharing laughter; a team that bonds over humor excels in working cohesively and achieving greatness."
              />
              </div>
              <div className="valueIcon__wrapper">
                <div className="value__main">
                  <div className="value__icon-one">
                    <DiamondIcon className="valueIcon__main" />
                  </div>
                  <div className="carousal__value">
                  <h2 className="valueTitle-one">Prestigous & Professional</h2>
                  <p className="valuePara-one">
                  Elevate your image with prestigious and professional services, establishing a remarkable reputation that sets you apart in your industry.
                  </p>
                  </div>
                </div>
                <div className="value__main">
                  <div className="value__icon-one">
                    <BookIcon className="valueIcon__main"/>
                  </div>
                  <div className="carousal__value">
                  <h2 className="valueTitle-one">Support & Knowledge</h2>
                  <p className="valuePara-one">
                  Empowering your journey with unwavering support and comprehensive knowledge, we pave the way for your growth and success.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-12 col-md-1"></div> */}
            <div className="col-12 col-md-6" data-aos="fade-left">
              <img
                src={Valueimg}
                alt="home"
                className="img-fluid ValueImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
