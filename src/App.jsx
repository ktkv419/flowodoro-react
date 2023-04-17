import React, { useEffect } from 'react'
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Starter from './components/Screens/Starter/Starter'
import Settings from './components/Screens/Settings/Settings'
import Timer from './components/Screens/Timer/Timer'
import History from './components/Screens/History/History'
import './App.scss'
import TimerWork from './components/Screens/Timer/Modes/Work/TimerWork'
import TimerBreak from './components/Screens/Timer/Modes/Break/TimerBreak'
import NotFound from './components/Screens/NotFound/NotFound'
import { useDispatch, useSelector } from 'react-redux'
import { clearLastSeen, setCurrent, setSettings } from './app/timerSlice'

const Layout = () => {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
    </div>
  )
}

function App() {
  const dispatch = useDispatch()
  const timer = useSelector((state) => state.timer)

  useEffect(() => {
    dispatch(clearLastSeen())
    if (timer.state === 'break') {
      dispatch(setCurrent(Math.floor(timer.current * timer.settings.breakCoef)))
    } else {
      dispatch(setCurrent(0))
    }
  }, [timer.state])

  useEffect(() => {
    if (window.localStorage.getItem('settings')) {
      dispatch(setSettings(JSON.parse(window.localStorage.getItem('settings'))))
    }
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Starter /> },
        {
          path: '/timer',
          element: <Timer />,
        },
        {
          path: '/timer/work',
          element: <TimerWork />,
        },

        { path: '/timer/break', element: <TimerBreak /> },
        { path: '/settings', element: <Settings /> },
        { path: '/history', element: <History /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
