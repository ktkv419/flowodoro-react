import React, { useEffect } from 'react'
import Button from '../../Utils/Button'
import './Timer.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { setRunning, setState } from '../../../app/timerSlice'
import Quote from '../../Utils/Quote'

const Timer = () => {
  const dispatch = useDispatch()
  const { state } = useSelector((state) => state.timer)

  if (state) {
    return <Navigate to={`/timer/${state}`} />
  }

  const path = '/timer/work'
  const action = () => {
    dispatch(setState('work'))
    dispatch(setRunning(true))
  }

  return (
    <section className="screen animate-slide-down timer">
      <Button path={path} action={action} type="huge">
        Start
      </Button>
      <Quote />
    </section>
  )
}

export default Timer
