import React from "react";
import './style.css'
const Heading = ({ label, title, desc, className, type, labelType }) => {
  return (
    <div className={`heading__wrapper ${className}`}>
      {label && <h4 className={`heading__label ${labelType}`}>{label}</h4>}
      <h1 className={`main__heading ${type}`}>{title}</h1>
      {desc && <p className="desc">{desc}</p>}
    </div>
  );
};

export default Heading;
