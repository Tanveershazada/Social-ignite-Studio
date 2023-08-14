import React from 'react'
import "./style.css";
import Heading from '../../components/Heading';

const GoalsSection = () => {
  return (
    <div className="Goal__section">
          <div className="overlay">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-6">
                  <Heading
                    className="text-white Goal__title"
                    type="large"
                    title="Digital Marketing"
                    desc="Developing customized strategies aligned with clients' business goals and target audience."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default GoalsSection