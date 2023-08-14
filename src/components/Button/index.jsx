import React from 'react'
import './style.css'
const Button = ({className, onClick, children}) => {
  return (
    <button className={`${className} button__global`} onClick={onClick}>{children}</button>
  )
}

export default Button;