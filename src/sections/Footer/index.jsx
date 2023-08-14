import React from "react";
import "./style.css";
import logoImg from "../../assets/logo.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../components/Icons";

const FooterSection = () => {
  return (
    <div className="Footer__container">
      <div className="Footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="Footer__hyper">
                <div className="logo__img">
                  <img src={logoImg} alt="" />
                  <div className="logo__title">
                    <p>Social ignite Studio</p>
                  </div>
                </div>
                <p className="Footer__para">
                Welcome to Social Ignite Studio, <br /> where creativity meets strategy, fueling <br /> your brand's fire and igniting social <br />success
                </p>
                <div className="Footer__icon">
                  <FacebookIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                  <LinkedinIcon />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="Footer__services">
                <h1>Services</h1>
                <ul>
                  <li>
                    <a href="#">Brand Development</a>
                  </li>
                  <li>
                    <a href="#">Marketing Agency</a>
                  </li>
                  <li>
                    <a href="#">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="#">Technical SEO</a>
                  </li>
                  <li>
                    <a href="#">Social media management</a>
                  </li>
                  <li>
                    <a href="#">
                      Keyword research and <br />
                      optimization
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="Footer__support">
                <h1>Support</h1>
                <ul>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Ticket Support</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-2">
              <div className="Footer__compony">
                <h1>Compony</h1>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Article & News</a>
                  </li>
                  <li>
                    <a href="#">Legal Notices</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="Footer__hr" />
    </div>
  );
};

export default FooterSection;
