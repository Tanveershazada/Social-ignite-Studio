import React from "react";
import "./style.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import {
  FiletextIcon,
  LayerIcon,
  SliderIcon,
  TickIcon,
} from "../../components/Icons";

const Package = () => {
  return (
    <div className="package__section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="package__main">
              <Heading
                className="Package__heading"
                type="medium"
                labelType="blue"
                label="CHOOSE PACKAGE"
                title="Innovative Solutions for Digital Success."
              />
            </div>
          </div>
          <div className="col 12 colmd-6">
            <div className="package__second-main">
              <p>
                "Unlock unparalleled digital success with our innovative
                solutions. We blend <br /> creativity, strategy, and technology to
                propel your brand to new heights."
              </p>
              <Button className="btn__primary mt-3 package__button-one">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="package__card-main">
              <div className="package__icon">
                <FiletextIcon className="layer__icon" />
              </div>
              <div className="package__card-title">
                <h2>Basic Digital Boost</h2>
              </div>
              <div className="package__card-des">
                <p>
                Elevate your online presence with our <br /> essential digital boost package.
                </p>
              </div>
              <div className="package__number">
                <span className="p__dollar">$</span>
                <span className="p__number">49</span>
                <h6 className="p__month">/MONTHLY</h6>
                <span className="package__border-bottom"></span>
              </div>

              <span className="p__top-title">Includes :</span>
              <div className="package__card-research">
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Website Analysis</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>On-Page SEO Optimization</span>
                </div>

                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Social Media Management</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Keyword Research</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Monthly Performance Reporting</span>
                </div>
                <div className="pacage__last">
                  <Button className="btn__primary mt-3 package__button">
                    GET STARTED
                  </Button>
                  <span>
                    14 Day Free Trial • Cancel Anytime • No Credit Card <br />{" "}
                    Required
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="package__card-main">
              <div className="package__icon">
                <LayerIcon className="layer__icon" />
              </div>
              <div className="package__card-title">
                <h2>Advanced Digital Growth</h2>
              </div>
              <div className="package__card-des">
                <p>
                Experience exponential online expansion through  <br />  our advanced digital growth strategies.
                </p>
              </div>
              <div className="package__number">
                <span className="p__dollar">$</span>
                <span className="p__number">99</span>
                <h6 className="p__month">/MONTHLY</h6>
                <span className="package__border-bottom"></span>
              </div>

              <span className="p__top-title">Includes :</span>
              <div className="package__card-research">
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Digital Marketing Strategy</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Comprehensive SEO Optimization</span>
                </div>

                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Digital Advertising Campaigns</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>High-Quality Content Creation</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Monthly Performance Reporting</span>
                </div>
                <div className="pacage__last">
                  <Button className="btn__primary mt-3 package__button">
                    GET STARTED
                  </Button>
                  <span>
                    14 Day Free Trial • Cancel Anytime • No Credit Card <br />{" "}
                    Required
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="package__card-main">
              <div className="package__icon">
                <SliderIcon className="layer__icon" />
              </div>
              <div className="package__card-title">
                <h2>Pro Digital Domination</h2>
              </div>
              <div className="package__card-des">
                <p>
                Master your online domain with our expert Pro <br /> Digital Domination services.
                </p>
              </div>
              <div className="package__number">
                <span className="p__dollar">$</span>
                <span className="p__number">299</span>
                <h6 className="p__month">/MONTHLY</h6>
                <span className="package__border-bottom"></span>
              </div>

              <span className="p__top-title">Includes :</span>
              <div className="package__card-research">
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Market and Competitor Research</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Multichannel Campaign Management</span>
                </div>

                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Personalized User Experience</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Digital Infrastructure Development</span>
                </div>
                <div className="package__card-first">
                  <TickIcon className="package__tick" />
                  <span>Advanced Consultation and Training</span>
                </div>
                <div className="pacage__last">
                  <Button className="btn__primary mt-3 package__button">
                    GET STARTED
                  </Button>
                  <span>
                    14 Day Free Trial • Cancel Anytime • No Credit Card <br />{" "}
                    Required
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
