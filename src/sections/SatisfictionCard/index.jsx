import React from "react";

const SatisfactionCard = ({className, title, desc, icon}) => {
  return (
    <div className={`choose__middle-wrapper ${className}`}>
      <div className="choose__middle-one">
       <div className="Choose__icon-one">

        {icon}
       </div>
        <h2 className="choose__title">{title}</h2>
        <p className="choose__para">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SatisfactionCard;
