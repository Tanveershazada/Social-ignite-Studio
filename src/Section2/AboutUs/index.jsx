import React from 'react'
import "./style.css";
import Heading from '../../components/Heading'

const AboutSection = () => {
  return (
          <div className="About__section">
          <div className="overlay">
            <div className="container">
              <div className="row d-flex align-items-center" >
                <div className="col-12 col-md-6" >
                  <Heading
                    className="text-white About__title"
                    type="large"
                    title="About us"
                    desc="Providing brilliant ideas for your business."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default AboutSection