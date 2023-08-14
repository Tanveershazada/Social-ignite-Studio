import React from "react";
import "./style.css";
import Heading from "../../components/Heading";
import Valueimg from "../../assets/value-img.jpg";
import { BookIcon, DiamondIcon } from "../../components/Icons";
import Button from "../../components/Button";

const AboutValueSection = () => {
  return (
    <div className="About-value__section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="AboutValue__container">
              <div className="row">
                <div className="col-12 col-md-12 mb-5">
                  <div className="aboutValue__title">
                    <div className="aboutvalue-one">
                      <h2>Are you ready to jump-start your career?</h2>
                      <span>
                        "Ready to propel your career forward? Unlock new
                        opportunities and growth with <br /> us as you take the leap to
                        success."
                      </span>
                    </div>
                    <div className="AboutValue__button">
                      <Button className="btn__secoundry mt-3 AboutValue__btn">
                        WE'RE HIRING!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <Heading
                className="text-white"
                type="medium"
                label="OUR VALUE"
                title="If you can laugh together, you can work together."
                desc="Foster collaboration and synergy by sharing laughter; a team that bonds over humor excels in working cohesively and achieving greatness."
              />
              <div className="About-valueIcon__wrapper">
                <div className="About-value__main">
                  <div className="About-value__icon-one">
                    <DiamondIcon className="About-valueIcon__main" />
                  </div>
                  <div className="About-carousal__value">
                    <h2 className="About-valueTitle-one">
                      Prestigous & Professional
                    </h2>
                    <p className="About-valuePara-one">
                    Elevate your image with prestigious and professional services, establishing a remarkable reputation that sets you apart in your industry.
                    </p>
                  </div>
                </div>
                <div className="About-value__main">
                  <div className="About-value__icon-one">
                    <BookIcon className="About-valueIcon__main" />
                  </div>
                  <div className="About-carousal__value">
                    <h2 className="About-valueTitle-one">
                      Support & Knowledge
                    </h2>
                    <p className="About-valuePara-one">
                    Empowering your journey with unwavering support and comprehensive knowledge, we pave the way for your growth and success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-12 col-md-1"></div> */}
            <div className="col-12 col-md-6">
              <img src={Valueimg} alt="home" className="img-fluid ValueImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValueSection;
