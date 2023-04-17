import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'

const Button = ({ children, type = '', action, path }) => {
  if (path) {
    return (
      <Link to={path} onClick={action} className={`btn ${type}`}>
        {children}
      </Link>
    )
  } else {
    return (
      <button type={action} className={`btn ${type}`}>
        {children}
      </button>
    )
  }
}

export default Button
