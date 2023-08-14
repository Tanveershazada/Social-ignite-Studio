import React from "react";
import "./style.css";
import Heading from "../../components/Heading";
import { ChartIcon, DatabaseIcon, ListIcon } from "../../components/Icons";
import laptop from "../../assets/deslaptop.jpg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

const DescriptionSection = () => {
  return (
    <div className="Dscription__section">
      <div className="overlay">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-8">
              <Heading
                className="Description__sub"
                type="medium"
                labelType="blue"
                title="Descriptions"
                desc=" At our digital marketing agency, we blend innovation, data-driven insights, and creative expertise to amplify your online presence, attract targeted audiences, and convert leads into loyal customers."
              />
              <p>
              Our team of skilled professionals crafts holistic strategies that encompass SEO, social media, PPC, content creation, and more. We pride ourselves on staying ahead of industry trends, adapting to algorithm changes, and delivering measurable results. With a client-centered approach, we're dedicated to nurturing brand growth and delivering exceptional ROI in today's digital age
              </p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="desIcon__wrapper">
                    <div className="des__main">
                      <div className="des__icon-one">
                        <ChartIcon className="desIcon__main" />
                      </div>
                      <div className="descarousal__value">
                        <h2 className="desTitle-one">
                          Real data on how your competition is doing
                        </h2>
                        <p className="desPara-one">
                        Gain insights into competitors' performance with accurate, actionable data.
                        </p>
                      </div>
                    </div>
                    <div className="des__main">
                      <div className="des__icon-one">
                        <DatabaseIcon className="desIcon__main" />
                      </div>
                      <div className="descarousal__value">
                        <h2 className="desTitle-one">
                          Where opportunities exist to increase revenue
                        </h2>
                        <p className="desPara-one">
                        Identify revenue growth opportunities through insightful analysis and strategic planning.
                        </p>
                      </div>
                    </div>
                    <div className="des__main">
                      <div className="des__icon-one">
                        <ListIcon className="desIcon__main" />
                      </div>
                      <div className="descarousal__value">
                        <h2 className="desTitle-one">
                          How many searchers there are for important keywords
                        </h2>
                        <p className="desPara-one">
                        Discover search volume for vital keywords driving your online visibility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <img className="des__img img-fluid" src={laptop} alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="des__second-main">
                <h1 className="desc__secondtitle">
                  Get Started with a Free Consultation from Our Experts!
                </h1>
                <hr />
                <div className="desc__input">
                <div className="row">
              <div className="col-12 ">
                <Input placeholder="Name" label="Name"/>
              </div>
              <div className="col-12 ">
                <Input placeholder="Phone" label="Phone"/>
              </div>
              <div className="col-12">
                <Textarea className="description__area" placeholder="Message" label="Message" />
              </div>
              <div className="col-12">
              <Button className="btn__primary mt-3 desc__button"> FREE CONSULTATIONS</Button>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
