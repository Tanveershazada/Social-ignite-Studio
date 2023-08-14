import React from 'react'
import "./style.css";
import G from "../../assets/g.jpg"
import Button from "../../components/Button";
import Input from '../../components/Input';


const Signup = () => {
  return (
    <div className="Signup__container">
      <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
        <div className="signup__wrapper">
            <div className="signup__img">
               <img src={G} alt="" />
          </div>
          <div className="signup__gyper">
          <h2>Ready to speak with a marketing expert?</h2>
          <span>(888) 4000-234</span>
          </div>
        </div>
        
        </div>
       <div className="col-12 col-md-6">
        <div className="signup__first ">
            <h3>Signup our newsletter to get update <br /> information, news, insight or promotions.</h3>
            <div className="signup__input">
           <div className="row">
           <div className="col-12 col-md-6 mb-3">
                <Input placeholder="Name"/>
              </div>
              <div className="col-12 col-md-6">
                <Input placeholder="Email" />
              </div>
              <div className="col-12 col-md-12 mt-3">
              <Button className="btn__primary w-100">SIGN UP</Button>
              </div>
           </div>
           
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup;