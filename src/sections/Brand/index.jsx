import React from 'react'
import "./style.css";
import { Col, Container, Row } from 'reactstrap';
import Heading from '../../components/Heading';
import {  FileIcon, HardIcon, MailIcon, PackageIcon, SaveIcon, UserIcon } from '../../components/Icons';
import BrandCard from '../../components/BrandCard';

const BrandSection = () => {
  const data = [
    {
      id: 1, title: 'Digital Marketing', desc: "Elevate your online presence, engage audiences, and drive growth through strategic digital marketing solutions tailored to your success.",
      icon: <FileIcon className="Brand__icon" />
    },
    {
      id: 2, title: 'Email Marketing', desc: 
      "Nurture customer relationships and drive conversions with targeted email marketing, delivering personalized messages that resonate and deliver results.",
      icon: <HardIcon className="Brand__icon" />
    },
    {
      id: 3, title: 'Social Media Services', desc: 
      "Amplify your brand's impact with our comprehensive social media services, creating compelling content and engaging interactions to captivate audiences.",
      icon: <PackageIcon className="Brand__icon" />
    },
    {
      id: 4, title: 'SEO Services', desc: "Enhance visibility and rank higher on search engines with our expert SEO services, driving organic traffic and boosting your online presence.",
      icon: <MailIcon className="Brand__icon" />
    },
    {
      id: 5, title: 'PPC Management', desc: "Maximize ROI and reach target audiences through meticulous PPC management, optimizing campaigns for optimal performance and business growth.",
      icon: <SaveIcon className="Brand__icon" />
    },
    {
      id: 6, title: 'Content Marketing', desc: "Craft compelling narratives that resonate, leveraging strategic content marketing to engage audiences, build trust, and drive meaningful connections.",
      icon: <UserIcon className="Brand__icon" />
    },
  ]
    
  return (
    
    <div className="Brand__section">
      <Container>
        <Row className="justify-content-center">
          <Col md={7} data-aos="fade-up"
     data-aos-duration="3000">
            <Heading
              className="text-center mb-5"
              type="medium"
              label="WHAT WE OFFER"
              labelType="blue"
              title="Connecting customers with your brand."
              desc="We bridge the gap forging meaningful connections between customers and your brand ensuring lasting engagement and mutual value"
            />
            
          </Col>
        </Row>
        <div className="row" >
          {data.map(item => (
            <div className="col-12 col-md-4" key={item.title} data-aos="flip-left"
            data-aos-duration="2000">
            <BrandCard title={item.title} desc={item.desc} icon={item.icon} />
            </div>
          ))}
        </div>
      </Container>
      
    </div>
    
  );
}

export default BrandSection;