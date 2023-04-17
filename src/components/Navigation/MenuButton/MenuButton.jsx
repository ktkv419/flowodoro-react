import React, { useEffect, useRef, useState } from 'react'
import './MenuButton.scss'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MenuButton = ({ mode }) => {
  const [active, setActive] = useState(false)
  const iconRef = useRef()

  const location = useLocation()

  useEffect(() => {
    location.pathname.startsWith(`/${mode}`)
      ? setActive(true)
      : setActive(false)
  }, [location])

  return (
    <React.Fragment>
      <Link
        className={`icon-box${active ? ' active' : ''}`}
        id={mode}
        to={mode}
      >
        <svg className="icon-box__icon" ref={iconRef}>
          <use xlinkHref={`../../../../icons.svg#icon-${mode}`} />
        </svg>
        <span className="icon-box__title">{mode}</span>
      </Link>
    </React.Fragment>
  )
}

export default MenuButton
