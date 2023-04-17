import React, { useEffect } from 'react'
import './Display.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent } from '../../app/timerSlice'
import playNotification from './playNotification'

const Display = () => {
  const dispatch = useDispatch()

  const { current, state, isRunning } = useSelector((state) => state.timer)

  let timer

  useEffect(() => {
    if (isRunning) {
      if (state === 'work') {
        timer = setTimeout(() => {
          dispatch(setCurrent(current + 1))
        }, 1000)
      }
      if (state === 'break') {
        timer = setTimeout(() => {
          if (current <= 0) {
            playNotification()
            return
          }
          dispatch(setCurrent(current - 1))
        }, 1000)
      }
    }

    return () => {
      clearInterval(timer)
    }
  }, [current])

  const hours = String(~~(current / 3600)).padStart(2, 0)
  const minutes = String(~~((current - hours * 60) / 60)).padStart(2, 0)
  const seconds = String(current - minutes * 60).padStart(2, 0)

  return (
    <div>
      <div className="stopwatch">
        {hours !== '00' ? (
          <>
            <span className="stopwatch__hours">{hours}</span>:
          </>
        ) : null}
        <span className="stopwatch__minutes">{minutes}</span>:
        <span className="stopwatch__seconds">{seconds}</span>
      </div>
    </div>
  )
}

export default Display
