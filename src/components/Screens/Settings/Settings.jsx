import React, { useState } from 'react'
import './Settings.scss'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Utils/Button'
import { useForm } from 'react-hook-form'
import { setSettings } from '../../../app/timerSlice'

const Settings = () => {
  const dispatch = useDispatch()
  const settings = useSelector((state) => state.timer.settings)

  const [breakCoef, setBreakCoef] = useState(settings.breakCoef)
  const [bigBreak, setBigBreak] = useState(settings.bigBreak)
  const [breaksAmount, setBreaksAmount] = useState(settings.breaksAmount)
  const [bigBreakCoef, setBigBreakCoef] = useState(settings.bigBreakCoef)

  const numbersOnly = new RegExp('[a-zA-Z]')

  const submitSettings = (e) => {
    e.preventDefault()
    if (![breakCoef, bigBreakCoef].every((el) => 0 < el && el < 1)) {
      alert('Coefficients should be between 0 and 1')
      return
    }
    if (!parseInt(breaksAmount)) {
      alert('Invalid amount of breaks')
      return
    }

    dispatch(setSettings({ breakCoef, bigBreak, bigBreakCoef, breaksAmount }))
  }

  return (
    <div className="screen animate-slide-down settings">
      <h3 className="settings__title">Settings</h3>
      <form action="" onSubmit={submitSettings}>
        <div className="item">
          <label htmlFor="break-coef" className="item__label">
            Break Coefficient
          </label>
          <input
            type="text"
            id="break-coef"
            value={breakCoef}
            onChange={(e) => {
              if (e.target.value.length > 3 || numbersOnly.test(e.target.value))
                return
              setBreakCoef(e.target.value)
            }}
            className="item__input"
            required={true}
          />
        </div>
        <div className="item">
          <label htmlFor="bigBreak" className="item__label">
            Big Break
          </label>
          <input
            type="checkbox"
            id="bigBreak"
            checked={bigBreak}
            onChange={() => {
              setBigBreak(!bigBreak)
            }}
            className="item__input"
          />
        </div>
        <div className={`item${bigBreak ? '' : ' hidden'}`}>
          <label htmlFor="big-break-coef" className={`item__label`}>
            Big Break Coefficient
          </label>
          <input
            type="text"
            id="big-break-coef"
            value={bigBreakCoef}
            onChange={(e) => {
              if (e.target.value.length > 3 || numbersOnly.test(e.target.value))
                return
              setBigBreakCoef(e.target.value)
            }}
            className="item__input"
          />
        </div>
        <div className={`item${bigBreak ? '' : ' hidden'}`}>
          <label htmlFor="breaks-amount" className={`item__label`}>
            Amount of small breaks
          </label>
          <input
            type="text"
            id="breaks-amount"
            value={breaksAmount}
            onChange={(e) => {
              if (e.target.value.length > 3 || numbersOnly.test(e.target.value))
                return
              setBreaksAmount(e.target.value)
            }}
            className="item__input"
          />
        </div>
        <Button action={'submit'}>Save</Button>
      </form>
    </div>
  )
}

export default Settings
