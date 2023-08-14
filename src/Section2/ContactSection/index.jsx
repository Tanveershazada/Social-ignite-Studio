import React from 'react'
import Heading from '../../components/Heading'
import "./style.css";

const ContectSection = () => {
  return (
    <div className="Contact__section">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <Heading
                    className="text-white Contact__title"
                    type="large"
                    title="Contact us"
                    desc="We would love to hear from you."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ContectSection