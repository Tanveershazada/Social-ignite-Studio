import React, { useEffect } from "react";
import "./style.css";
import Deleverimg from "../../assets/delever__img.jpg";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Aos from "aos";
import "aos/dist/aos.css";

const DeleverSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Delever__section">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-6"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Heading
              className="Delever__heading"
              type="medium"
              labelType="blue"
              label="WHO WE ARE"
              title="We deliver revenue generating digital marketing solutions. "
              desc="Unlock growth with our impactful digital marketing strategies, driving revenue and success for your business."
            />

            <Button className="btn__primary mt-3 mb-5">Discover More</Button>
          </div>
          <div
            className="col-12 col-md-6"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="bubbles__wrapper">
              <div
                className="bubble__global bubble__two Delever__bubble d-none d-md-block"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <h1>15+</h1>
                <p>Years of Experience</p>
              </div>
            </div>
            <img
              src={Deleverimg}
              alt="Delever"
              className="img-fluid delever__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleverSection;
