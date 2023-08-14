import React, { useState } from "react";
import "./style.css";
import Heading from "../../components/Heading";
import {
  CloudIcon,
  FolderIcon,
  MessageIcon,
  PlusIcon,
} from "../../components/Icons";
import SatisfactionCard from "../SatisfictionCard";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ChooseSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  const data = [
    {
      id: 1,
      title: "Leading a Team of 500+ Digital Marketing Experts.",
      desc: "Pioneering success with a dedicated team of 500+ digital marketing experts, we drive innovation and growth for our clients.",
      icon: <CloudIcon />,
    },
    {
      id: 2,
      title: "Dashboard access for optimizing, measuring, and reporting ROI.",
      desc: "Empower your decisions with dashboard access, effortlessly optimizing, measuring, and reporting ROI for informed strategies and impactful outcomes.",
      icon: <FolderIcon />,
    },
    {
      id: 3,
      title:
        "In-depth analysis of your business goals, industry, and competitors.",
      desc: "Delve deep into your business objectives, industry landscape, and rivals, enabling strategic insights that drive growth and competitive advantage.",
      icon: <MessageIcon />,
    },
    {
      id: 4,
      title: "24/7 help desk, and direct client phone line.",
      desc: "Reliable support around the clock with our 24/7 help desk and direct client phone line, ensuring your needs are met promptly.",
      icon: <PlusIcon />,
    },
  ];
  return (
    <div className="Choose__section">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Heading
              className=""
              type="medium"
              label="WHY CHOOSE US"
              title="We are here for we always give you satisfaction."
              desc="Our commitment is your satisfaction. Count on us as your reliable partner, dedicated to delivering consistent excellence and fulfillment."
            />
          </div>
          <div
            className="col-12 col-md-8"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="row">
              {data.map((item) => (
                <div className="col-12 col-md-6" key={item.id}>
                  <SatisfactionCard
                    title={item.title}
                    desc={item.desc}
                    icon={item.icon}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <div className="Choose-main__wrapper">
              <div className="Choose__main-hyper">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={100} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                </ScrollTrigger>
                <p>Happy Clients</p>
              </div>

              <div className="Choose__main-hyper">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <h1>
                    {counterOn && (
                      <CountUp start={0} end={500} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                </ScrollTrigger>
                <p>Marketing Expert</p>
              </div>
              <div className="Choose__main-hyper">
              <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                <h1>
                {counterOn && (
                      <CountUp start={0} end={300} duration={2} delay={0} />
                    )}
                  +</h1>
                </ScrollTrigger>
                <p>Leads Generated</p>
              </div>
              <div className="Choose__main-hyper">
              <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                <h1>
                {counterOn && (
                      <CountUp start={0} end={600} duration={2} delay={0} />
                    )}
                 +</h1>
                </ScrollTrigger>
                <p>Reveneu Driven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
