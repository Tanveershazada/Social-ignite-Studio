import React from "react";
import Heading from "../../components/Heading";
import { Col, Container, Row } from "reactstrap";
import ServiceCard from "../../components/ServiceCard";
import "./style.css"

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Search Engine Optimization",
      desc: "Elevate your online presence with expert Search Engine Optimization, ensuring top visibility and driving organic traffic to your website.",
    },
    {
      id: 2,
      title: "Paid Media Management",
      desc: "Maximize your reach and ROI through strategic Paid Media Management, targeting audiences effectively and amplifying your brand's impact.",
    },
    {
      id: 3,
      title: "Social Media Management",
      desc: "Crafting compelling narratives, we excel in Social Media Management, fostering engagement, growth, and brand loyalty across digital platforms.",
    },
  ];
  return (
    <div className="services__section">
      <Container>
        <Row className="justify-content-center" data-aos="fade-up"
          data-aos-duration="2000">
          <Col sm={12} md={{ size: 7 }}>
            <Heading
              className="text-center mb-5"
              type="medium"
              labelType="blue"
              title="We’re a leader in tech-enabled digital marketing solutions"
              desc="Pioneering tech-driven marketing, we lead the way in delivering innovative solutions for digital success and market leadership."
            />
          </Col>
        </Row>
       <div  data-aos="fade-up"
     data-aos-duration="3000">
       <Row>
          
          {services.map((item) => (
            <Col md={4} key={item.id}>
              <ServiceCard title={item.title} desc={item.desc} icon={item.id} className="mb-3" />
            </Col>
          ))}
        </Row>
       </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
