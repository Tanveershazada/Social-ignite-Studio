import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../../assets/logo.png";
import "./style.css";
import Button from "../../components/Button";
import useScrollClientY from "../../hooks/useScrollClientY";
import { CloseIcon, CloudIcon } from "../../components/Icons";

function Header(props) {
  const scrollClientY = useScrollClientY();
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="Navbar__wrapper">
      <Navbar
        className={`Navbar__main ${scrollClientY > 200 && "bg-white"}`}
        expand="sm"
        fixed="top"
      >
        <div className="container">
          <div className="d-block align-items-center d-md-flex">
            <div className="d-flex justify-content-between">

            <NavbarBrand href="/" className="me-auto navbar__wrapper">
              <img src={logo} alt="" className="img-fluid Navbar__logo" />
              <span
                className={`navbar__span ${
                  scrollClientY > 200 ? "text-black" : "text-white"
                } d-none d-md-inline-block`}
                >
                Social ignite Studio
              </span>
            </NavbarBrand>
            <NavbarToggler
              onClick={toggleNavbar}
              className="me-2 toggleNavbar"
              />
              </div>
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar className="ms-auto me-0 navbar__nav nav__list__main" >
                <div className="d-flex d-md-none close__icon" onClick={() => setCollapsed(!collapsed)}><CloseIcon/></div>
                <NavItem>
                  <NavLink
                    className={`nav__items ${
                      scrollClientY > 200 && "text-black"
                    } active__cls`}
                    href="/"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`nav__items ${
                      scrollClientY > 200 && "text-black"
                    }`}
                    href="/about"
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`nav__items ${
                      scrollClientY > 200 && "text-black"
                    }`}
                    href="/Pricing"
                  >
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`nav__items ${
                      scrollClientY > 200 && "text-black"
                    }`}
                    href="/contact"
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                <Button
                  className={`navbar__btn ${
                    scrollClientY > 200 ? "btn__primary" : "btn__secoundry"
                  }`}
                >
                  GET STARTED
                </Button>
                </NavItem>
              </Nav>
                
            </Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
