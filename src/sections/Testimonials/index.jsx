import React from "react";
import "./style.css";
import { Col, Container, Row } from "reactstrap";
import Heading from "../../components/Heading";
import testimonialOne from "../../assets/testimonial.jpg";
import testimonialTwo from "../../assets/testimonial2.jpg";
import testimonialThree from "../../assets/testimonial3.jpg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      breakpoints: {
        "(min-width: 600px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },

      loop: true,

      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="Testimonial__section">
      <Container>
        <Row className="justify-content-center">
          <Col md={7}>
            <Heading
              className="text-center mb-5"
              type="medium"
              label="TESTIMONIAL"
              labelType="blue"
              title="Client Feedback & Reviews"
              desc="Hear from satisfied clients through valuable feedback and reviews, a testament to our commitment in delivering exceptional results and service."
            />
          </Col>
        </Row>

        <div className="row">
          <div className="testimonialCard__container" data-aos="zoom-out-up"  data-aos-duration="2000">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <div className="testimonialCard__one">
                  <img src={testimonialOne} alt="" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quo? Corrupti tempora vitae veniam corporis
                    explicabo? In sapiente optio numquam repellendus modi
                    reiciendis delectus, hic quas esse
                  </p>
                  <h3>John Carter</h3>
                  <span>CEO, Stellar Enterprices</span>
                </div>
              </div>
              <div className="keen-slider__slide number-slide2">
                <div className="testimonialCard__one">
                  <img src={testimonialTwo} alt="" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quo? Corrupti tempora vitae veniam corporis
                    explicabo? In sapiente optio numquam repellendus modi
                    reiciendis delectus, hic quas esse
                  </p>
                  <h3>Emily Davis</h3>
                  <span>E-commerce Manager, VisiOnary Brands</span>
                </div>
              </div>
              <div className="keen-slider__slide number-slide3">
                <div className="testimonialCard__one">
                  <img src={testimonialThree} alt="" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quo? Corrupti tempora vitae veniam corporis
                    explicabo? In sapiente optio numquam repellendus modi
                    reiciendis delectus, hic quas esse
                  </p>
                  <h3>Sarah Thompson</h3>
                  <span>Marketing Director, Phoenix Solutions</span>
                </div>
              </div>
              <div className="keen-slider__slide number-slide1">
                <div className="testimonialCard__one">
                  <img src={testimonialOne} alt="" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quo? Corrupti tempora vitae veniam corporis
                    explicabo? In sapiente optio numquam repellendus modi
                    reiciendis delectus, hic quas esse
                  </p>
                  <h3>John Carter</h3>
                  <span>CEO, Stellar Enterprices</span>
                </div>
              </div>

              <div className="keen-slider__slide number-slide2">
                <div className="testimonialCard__one">
                  <img src={testimonialTwo} alt="" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quo? Corrupti tempora vitae veniam corporis
                    explicabo? In sapiente optio numquam repellendus modi
                    reiciendis delectus, hic quas esse
                  </p>
                  <h3>Emily Davis</h3>
                  <span>E-commerce Manager, VisiOnary Brands</span>
                </div>
              </div>

              <div className="keen-slider__slide number-slide3">
                <div className="testimonialCard__one">
                  <img src={testimonialThree} alt="" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quo? Corrupti tempora vitae veniam corporis
                    explicabo? In sapiente optio numquam repellendus modi
                    reiciendis delectus, hic quas esse
                  </p>
                  <h3>Sarah Thompson</h3>
                  <span>Marketing Director, Phoenix Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialSection;
