import React from 'react'
import './Starter.scss'
import { Link } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'

const Starter = () => {
  const animatedText = () => {
    return 'Flowodoro'.split('').map((el) => {
      return (
        <span
          key={nanoid()}
          onMouseEnter={(e) => {
            e.target.classList.add('animate')
            setTimeout(() => e.target.classList.remove('animate'), 900)
          }}
        >
          {el}
        </span>
      )
    })
  }

  return (
    <div className="starter screen animate-fade-in">
      <div className="starter__content">
        <h1 className="starter__title">{animatedText()}</h1>
        <h3 className="starter__subtitle">
          the only time managment technique you need
        </h3>
        <p>
          It is a productivity-enhancing time management application that
          combines the principles of{' '}
          <Link
            target="_blank"
            to={'https://en.wikipedia.org/wiki/Flow_(psychology)'}
          >
            flow
          </Link>{' '}
          and{' '}
          <Link
            target="_blank"
            to={'https://en.wikipedia.org/wiki/Pomodoro_Technique'}
          >
            Pomodoro
          </Link>{' '}
          technique. Achieve optimal performance and focus by leveraging timed
          work sessions and breaks to get into the flow state. Maximize
          productivity and enjoyment in your tasks with Flowodoro
        </p>
      </div>
      <footer className="footer">
        <Link className="footer__text" to="https://ktkv419.xyz">
          Made by ktkv419
        </Link>
        <div className="footer__icon-box">
          <Link to="https://github.com/ktkv419/flowodoro-react">
            <svg className="footer__icon-box__item">
              <use xlinkHref={'../../../../icons.svg#icon-github'} />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Starter
