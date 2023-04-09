import React, { useRef } from 'react'
import './MenuButton.scss'

const MenuButton = ({ mode }) => {
  const iconRef = useRef()

  const animateButton = (btn) => {
    iconRef.current.classList.add('change')
    setTimeout(() => iconRef.current.classList.remove('change'), 500)
  }

  return (
    <React.Fragment>
      <div
        className="icon-box"
        id={mode}
        onClick={(e) => animateButton(e.target)}
      >
        <svg className="icon-box__icon" ref={iconRef}>
          <use xlinkHref={`../../../../public/icons.svg#icon-${mode}`} />
        </svg>
        <span className="icon-box__title">{mode}</span>
      </div>
    </React.Fragment>
  )
}

export default MenuButton
