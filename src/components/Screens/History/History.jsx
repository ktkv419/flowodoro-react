import React from 'react'
import Button from '../../Utils/Button'
import './History.scss'
import { useDispatch } from 'react-redux'
import { clearHistory } from '../../../app/timerSlice'

const History = () => {
  const dispatch = useDispatch()

  const history = JSON.parse(window.localStorage.getItem('history'))

  if (!history)
    return (
      <div className="screen history animate-slide-down">
        <div className="none">Its time to make history!</div>
      </div>
    )

  const workSessions = history.filter((session) => session.type === 'work')
  const breakSessions = history.filter((session) => session.type === 'break')

  const workOverall = workSessions.reduce((acc, x) => acc + x.duration, 0)
  const breakOverall = breakSessions.reduce((acc, x) => acc + x.duration, 0)

  const relationCalculated = workOverall / breakOverall
  const relation =
    relationCalculated % 1 === 0
      ? relationCalculated
      : relationCalculated.toFixed(1)

  const workedToday = workSessions
    .filter((session) => session.time > Date.now() - 86400000)
    .reduce((acc, x) => acc + x.duration, 0)

  const workedWeek = workSessions
    .filter((session) => session.time > Date.now() - 604800000)
    .reduce((acc, x) => acc + x.duration, 0)

  const workedMonth = workSessions
    .filter((session) => session.time > Date.now() - 2592000000)
    .reduce((acc, x) => acc + x.duration, 0)

  return (
    <div className="screen history animate-slide-down">
      <h2 className="history__title">Your achievements</h2>
      <ul>
        <li className="item">
          You work <span className="item__time">{relation}</span> times more
          than you rest
        </li>
        <li className="item">
          Good job, you worked for{' '}
          <span className="item__time">{Math.round(workedToday / 60)}</span>{' '}
          minutes today!
        </li>
        <li className="item">
          You are really hardworking with{' '}
          <span className="item__time">{Math.round(workedWeek / 3600)}</span>{' '}
          hours last week!
        </li>
        <li className="item">
          You are on a right path with{' '}
          <span className="item__time">{Math.round(workedMonth / 3600)}</span>{' '}
          hours last month
        </li>
      </ul>
      <Button
        action={() => {
          dispatch(clearHistory())
          window.localStorage.removeItem('history')
        }}
        path="/history"
      >
        Clear history
      </Button>
    </div>
  )
}

export default History
