import React from "react";
import "./style.css";
import Heading from "../../components/Heading";
import { Col, Container, Row } from "reactstrap";
import TrustedOne from "../../assets/logo_8.png";
import TrustedTwo from "../../assets/logo_7.png";
import TrustedThree from "../../assets/logo_6.png";
import TrustedFour from "../../assets/logo_5.png";
import TrustedFive from "../../assets/logo_4.png";
import TrustedSix from "../../assets/logo_3.png";
import TrustedSeven from "../../assets/logo_2.png";
import TrustedEight from "../../assets/logo_1.png";

const TrustedSection = () => {
  return (
    <div className="Trusted__section">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} data-aos="fade-up"
     data-aos-duration="3000">
            <Heading
              className="text-center mb-5"
              type="medium"
              labelType="blue"
              title="Trusted by 25,000+ world-class brands and organizations of all sizes"
              desc="Empowering over 25,000 global brands and diverse organizations, we're the trusted partner for businesses of every scale and industry."
            />
          </Col>
        </Row>
        <div className="row">
          <div className="Trusted__main">
            <div className="Trusted__logo-img-first"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <div className="Trusted__img-one">
                <img src={TrustedOne} alt="" />
              </div>
              <div className="Trusted__img-one">
                <img src={TrustedTwo} alt="" />
              </div>
              <div className="Trusted__img-one">
                <img src={TrustedThree} alt="" />
              </div>
              <div className="Trusted__img-one">
                <img src={TrustedFour} alt="" />
              </div>
              <div className="Trusted__img-one">
                <img src={TrustedFive} alt="" />
              </div>
            </div>

            <div className="Trusted__logo-img-second"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <div className="Trusted__img-one">
                <img src={TrustedSix} alt="" />
              </div>
              <div className="Trusted__img-one">
                <img src={TrustedSeven} alt="" />
              </div>
              <div className="Trusted__img-one">
                <img src={TrustedEight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustedSection;
