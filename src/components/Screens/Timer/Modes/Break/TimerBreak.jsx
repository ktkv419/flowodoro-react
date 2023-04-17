import React, { useEffect } from 'react'
import './TimerBreak.scss'
import Button from '../../../../Utils/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToHistory,
  clearLastSeen,
  incCurrentBreak,
  setCurrent,
  setLastSeen,
  setRunning,
  setState,
} from '../../../../../app/timerSlice'
import Display from '../../../../Utils/Display'
import playNotification from '../../../../Utils/playNotification'
import Quote from '../../../../Utils/Quote'

const TimerBreak = () => {
  const dispatch = useDispatch()

  const { lastSeen, current, currentBreak, settings } = useSelector(
    (state) => state.timer
  )

  useEffect(() => {
    if (lastSeen) {
      const remaining = current - Math.round((Date.now() - lastSeen) / 1000)
      dispatch(setCurrent(remaining >= 0 ? remaining : 0))
      dispatch(clearLastSeen())
    }
    return () => {
      dispatch(setLastSeen())
    }
  }, [])

  return (
    <div className="screen break animate-slide-down">
      <h3 className="work__title">Deserved rest</h3>
      <Display />
      <Button
        type={'big'}
        action={() => {
          if (currentBreak < settings.breaksAmount) {
            dispatch(setRunning(true))
            dispatch(setState('work'))
            dispatch(incCurrentBreak())
          } else {
            dispatch(setRunning(false))
            dispatch(setState(''))
          }
          dispatch(
            addToHistory({
              type: 'break',
              duration: current,
              time: Date.now(),
            })
          )
        }}
        path={'/timer'}
      >
        {currentBreak < settings.breaksAmount ? 'To Work' : 'Home'}
      </Button>
      <Quote />
    </div>
  )
}

export default TimerBreak
