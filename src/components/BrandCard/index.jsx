import React from "react";

const BrandCard = ({title, desc, icon}) => {
  return (
    <div className="Brandcard__1">
        {icon}
      <h2 className="Brand__title">{title}</h2>
      <p className="Brand__des">
        {desc}
      </p>
    </div>
  );
};

export default BrandCard;
