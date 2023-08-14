import React from 'react'
import "./style.css"
import Heading from '../../components/Heading';
import Button from '../../components/Button';

const Banner = () => {
  return (
    <div className="banner__section">
      <div className="overlay">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-md-6" >
             <div className="banner__main">
             <Heading
                className="Banner__sub"
                type="medium"
                labelType="blue"
                title="Let us build the bridge between your brand and customer"
                desc="We're the architects of connection, bridging your brand and customers, forging lasting relationships through strategic engagement and communication."
              />
             <Button className="btn__secoundry mt-3">Discover More</Button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;