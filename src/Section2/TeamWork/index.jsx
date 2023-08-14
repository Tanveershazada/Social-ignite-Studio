import React from "react";
import "./style.css";
import { Button, Col, Container, Row } from "reactstrap";
// import BrandCard from "../../components/ApprochCard"
import Heading from "../../components/Heading";
import Team1 from "../../assets/Team1.jpg";
import Team2 from "../../assets/Team2.jpg";
import Team3 from "../../assets/Team3.jpg";
import Team4 from "../../assets/Team4.jpg";

import { EmailIcon, FacebookIcon, LinkedinIcon } from "../../components/Icons";

const TeamWorkSection = () => {
  return (
    <div className="Team__section">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} >
            <Heading
              className="text-center mb-5"
              type="medium"
              label="MEET OUR TEAM"
              labelType="blue"
              title="Teamwork makes the dream work."
            />
          </Col>
        </Row>

        <div class="row">
          <div class="col-12 col-md-3 mb-4">
            <div class="Teamcard__1">
              <img src={Team1} class="card-img-top" alt="" />
              <div class="team__sub">
                <h5 class="Team__title">Nicholas Thomas</h5>
                <p class="Team__des">FOUNDER</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3 mb-4">
            <div class="Teamcard__1">
              <img src={Team2} class="card-img-top" alt="" />
              <div class="team__sub">
                <h5 class="Team__title">Jane Smith</h5>
                <p class="Team__des">FOUNDER</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3 mb-4">
            <div class="Teamcard__1">
              <img src={Team3} class="card-img-top" alt="" />
              <div class="team__sub">
                <h5 class="Team__title">Alex Johnson</h5>
                <p class="Team__des">FOUNDER</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3 mb-4">
            <div class="Teamcard__1">
              <img src={Team4} class="card-img-top" alt="" />
              <div class="team__sub">
                <h5 class="Team__title">John Doe</h5>
                <p class="Team__des">FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeamWorkSection;
