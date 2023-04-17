import React, { useEffect } from 'react'
import './Navigation.scss'
import MenuButton from './MenuButton/MenuButton'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        Flowodoro
      </Link>
      <nav className="user-nav">
        <MenuButton mode={'timer'} />
        <MenuButton mode={'settings'} />
        <MenuButton mode={'history'} />
      </nav>
    </header>
  )
}

export default Navigation
