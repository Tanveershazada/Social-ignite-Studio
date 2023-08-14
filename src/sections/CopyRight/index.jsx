import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

const CopyRight = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="Copyright__wrapper d-flex justify-content-between align-items-center flex-wrap">
          <p>Copyright© 2023 Digimark, All rights reserved. Powered by MoxCreative.</p>
          <ul className='d-flex gap-3'>
            <li>
              <p>Term of services</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Cookie Policy</p>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CopyRight