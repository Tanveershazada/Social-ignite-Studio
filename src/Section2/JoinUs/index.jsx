import React from "react";
import "./style.css";
import { Col, Row } from "reactstrap";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

const JoinUs = () => {
  return (
    <div className="joinus__section">
      
        <Col md={4}>
          <Heading
            className="text-center mb-5"
            type="medium"
            label="JOIN US"
            labelType="blue"
            title="Interest in joining us? Let's talk about your opportunity."
            desc="Excited about joining our team Let us have a conversation about the possibilities that await you Your opportunity starts here."
          />
           <Button className="btn__primary mt-3">CONTACT US</Button>
        </Col>
    </div>
  );
};

export default JoinUs;
