import React from "react";
import { Col, Container, Row } from "reactstrap";
import Heading from "../../components/Heading";
import { EmailIcon, MapIcon, PhoneIcon } from "../../components/Icons";
import ApprochCard from "../../components/ApprochCard";
import "./style.css";
const InformationSection = () => {
  const services = [
    {
      id: 1,
      title: "Head Office",
      desc: "Jalan Cempaka Wangi No 22  Jakarta - Indonesia",
      icon: <MapIcon/>,
    },
    {
      id: 2,
      title: "Email us",
      desc: "info@socialignitestudio.com",
      icon: <EmailIcon />,
    },
    {
      id: 3,
      title: "Call us",
      desc: "Phone : +6221.2002.2012 Fax : +6221.2002.2013",
      icon: <PhoneIcon />,
    },
  ];
  return (
    <div className="information__section">
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={7}>
          <Heading
            className="text-center mb-5"
            type="medium"
            label="GET IN TOUCH"
            labelType="blue"
            title="Don't hesitate to contact us for more information."
          />
        </Col>
      </Row>
      <Row>
        {services.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
              <ApprochCard title={item.title} desc={item.desc} icon={item.icon} className="mb-3 infomation__card" />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  );
};

export default InformationSection;
