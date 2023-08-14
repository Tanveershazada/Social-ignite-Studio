import React, { useState } from "react";
import "./style.css";
import Heading from "../../components/Heading";
import CareerImg from "../../assets/career.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Career = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="career__section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-md-6">
              <Heading
                className="Career__heading mt-5 px-4"
                type="medium"
                labelType="blue"
                label="OUR PROJECT"
                title="The transaction of ideas is done here."
                desc="Discover a dynamic hub where ideas converge and transform into innovative strategies. Experience seamless collaboration, fueling your brand's journey to success."
              />

              <div className="career__main">
                <div className="career__upper">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span>
                  {counterOn && (
                      <CountUp start={0} end={47} duration={2} delay={0} />
                    )}
                    +</span>
                  </ScrollTrigger>
                  <p>Happy Clients</p>
                </div>
                <div className="career__upper">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span>
                  {counterOn && (
                      <CountUp start={0} end={80} duration={2} delay={0} />
                    )}
                    +</span>
                  </ScrollTrigger>
                  <p>Project Done</p>
                </div>
                <div className="career__upper">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span>
                  {counterOn && (
                      <CountUp start={0} end={15} duration={2} delay={0} />
                    )}
                  </span>
                  </ScrollTrigger>
                  <p>Client Rating</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 ">
              <div className="career__img ">
                <img src={CareerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
