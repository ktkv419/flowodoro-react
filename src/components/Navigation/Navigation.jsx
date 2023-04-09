import React from 'react'
import './Navigation.scss'
import { Outlet } from 'react-router-dom'
import MenuButton from './MenuButton/MenuButton'

const Navigation = () => {
  return (
    <React.Fragment>
      <header className="header">
        <span className="header__logo">Flowodoro</span>
        <nav className="user-nav">
          <MenuButton mode={'timer'} />
          <MenuButton mode={'settings'} />
          <MenuButton mode={'history'} />
        </nav>
      </header>
      <Outlet />
    </React.Fragment>
  )
}

export default Navigation
