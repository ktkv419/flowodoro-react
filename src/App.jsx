import Navigation from './components/Navigation/Navigation'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import './App.scss'
import Settings from './components/Settings/Settings'
import Starter from './components/Starter/Starter'
import React from 'react'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigation />}>
        <Route index element={<Starter />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<Settings />} />
      </Route>
    )
  )

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
