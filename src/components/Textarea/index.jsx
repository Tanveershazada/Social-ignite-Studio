import React from "react";
import "./style.css"

const Textarea = ({ placeholder, label, name, onChange, value, labelclassName, className }) => {
  return (
    
    <>
   
  <label className={`${labelclassName} global-label mb-2`} for={name}>{label}</label>
   <textarea className={`${className} global-input `} value={value} onChange={onChange} name={name} type="text" placeholder={placeholder}  />
    
  </>
    )
};

export default Textarea;
