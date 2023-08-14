import React from "react";
import { Col, Container, Row } from "reactstrap";
import Heading from "../../components/Heading";
import {
  CheckIcon,
  DiscoveryIcon,
  HotspotIcon,
  NavigationIcon,
} from "../../components/Icons";
import ApprochCard from "../../components/ApprochCard";
import './style.css'
const ApprochSection = () => {
  const services = [
    {
      id: 1,
      title: "Discovery",
      desc: "Embark on a journey of discovery, uncovering new horizons and insights that shape your path to innovation and growth",
      icon: <DiscoveryIcon/>,
    },
    {
      id: 2,
      title: "Strategize",
      desc: "Craft precise roadmaps and navigate success as we strategize together, harnessing opportunities and achieving your business goals.",
      icon: <CheckIcon />,
    },
    {
      id: 3,
      title: "Implementation",
      desc: "Transform vision into reality through seamless implementation, driving efficiency and achieving tangible results that elevate your business.",
      icon: <NavigationIcon />,
    },
    {
      id: 4,
      title: "Analysis & Optimization",
      desc: "Unlock potential with meticulous analysis and strategic optimization, refining your approach to drive performance and exceed goals.",
      icon: <HotspotIcon />,
    },
  ];
  return (
    <div className="approch__section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={7}>
            <Heading
              className="text-center mb-5"
              type="medium"
              label="APPROACH"
              labelType="blue"
              title="Unleashing the Potential of Digital Marketing"
            />
          </Col>
        </Row>
        <Row>
          {services.map((item) => (
            <Col key={item.id} md={3}>
                <ApprochCard title={item.title} desc={item.desc} icon={item.icon} className="mb-3" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ApprochSection;
