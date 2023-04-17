import React, { useEffect, useState } from 'react'
import './TimerWork.scss'
import Display from '../../../../Utils/Display'
import Button from '../../../../Utils/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToHistory,
  clearLastSeen,
  setCurrent,
  setLastSeen,
  setRunning,
  setState,
} from '../../../../../app/timerSlice'
import Quote from '../../../../Utils/Quote'

const TimerWork = () => {
  const dispatch = useDispatch()
  const { lastSeen, current } = useSelector((state) => state.timer)

  useEffect(() => {
    if (lastSeen) {
      dispatch(setCurrent(Math.round((Date.now() - lastSeen) / 1000) + current))
      dispatch(clearLastSeen())
    }
    return () => {
      dispatch(setLastSeen())
    }
  }, [])

  return (
    <div className="screen work animate-slide-down">
      <h3 className="work__title">Work time!</h3>
      <Display />
      <Button
        type={'big'}
        action={() => {
          dispatch(
            addToHistory({
              type: 'work',
              duration: current,
              time: Date.now(),
            })
          )
          dispatch(setState('break'))
        }}
        path={'/timer'}
      >
        Stop
      </Button>
      <Quote />
    </div>
  )
}

export default TimerWork
