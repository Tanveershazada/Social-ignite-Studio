import React from "react";
import Heading from "../../components/Heading";
import "./style.css";
import HomeImage from "./../../assets/img-home.png";
import Button from "../../components/Button";

const HeroSection = () => {
  return (
    <div className="hero__section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div
              className="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Heading
                className="text-white"
                type="large"
                label="WELCOME TO social ignite studio"
                title="Drive Growth with Digital Strategies."
                desc="60% Increase in Sales Conversions: Accelerate Growth with Our Proven Digital Marketing Strategies!"
              />
              <Button
                className="btn__secoundry mt-3"
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                Discover More
              </Button>
            </div>
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-5">
              <div className="bubbles__wrapper d-none d-sm-block">
                <div
                  className="bubble__global bubble__one"
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                >
                  <h1>6B+</h1>
                  <p>Reveneu Driven</p>
                </div>
                <div className="bubble__global bubble__two" data-aos="zoom-in-left" data-aos-duration="3000">
                  <h1>60%</h1>
                  <p>Increase Sales</p>
                </div>
                <div
                  className="bubble__global bubble__three"
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                >
                  <h1>91%</h1>
                  <p>Retention Rate</p>
                </div>
              </div>
              <img
                src={HomeImage}
                alt="home"
                className= "img-fluid home__image d-none d-md-block"
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
