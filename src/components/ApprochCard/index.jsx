import React from "react";
import "./style.css";

const ApprochCard = ({ title, desc, icon, className }) => {
  return (
    <div className={`${className} approch__card__wrapper`}>
      <div className="main__card">
        <div className="approch__card">
          <div className="icon__wrapper">
            {icon}
          </div>
          <h2 className="card__title">{title}</h2>
          <p className="card__para">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ApprochCard;
