import React from "react";
import "./style.css";
import Heading from "../../components/Heading";

import { Col, Container, Row } from "reactstrap";
import { PlayIcon } from "../../components/Icons";
import Button from "../../components/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Solutions = () => {
  return (
    <div className="solutions__section">
      <div className="overlay">
      
        <Container className="Solution__wrapper">
          <Row>
            <div className="col-md-6 offset-md-3">
              <div className="d-flex flex-column align-items-center" data-aos="fade-up"
     data-aos-duration="3000" >

              <PlayIcon className="solution__icon" data-aos="zoom-out"
               data-aos-duration="2000" />
              <Heading
                className="text-white text-center"
                type="large"
                title="Creative solutions deliver profits to your door."
                desc="Experience the magic of creative solutions, opening the door to increased profits and paving the way for success!"
                />
              <Button className="btn__primary mt-3 Solution__btn">Discover More</Button>
                </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Solutions;
