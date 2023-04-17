import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    current: 0,
    state: '',
    isRunning: false,
    currentBreak: 0,
    lastSeen: null,
    settings: {
      breakCoef: 0.3,
      bigBreak: false,
      bigBreakCoef: 0.6,
      breaksAmount: 3,
    },
    history: [],
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setState: (state, action) => {
      state.state = action.payload
    },
    setRunning: (state, action) => {
      state.isRunning = action.payload
    },
    setLastSeen: (state) => {
      state.lastSeen = Date.now()
    },
    clearLastSeen: (state) => {
      state.lastSeen = null
    },
    incCurrentBreak: (state) => {
      state.currentBreak++
    },
    // setBreakCoef: (state, action) => {
    //   state.breakCoef = action.payload
    // },
    // setBigBreakCoef: (state, action) => {
    //   state.bigBreakCoef = action.payload
    // },
    // setBigBreak: (state, action) => {
    //   state.bigBreak = action.payload
    // },
    setSettings: (state, action) => {
      window.localStorage.setItem('settings', JSON.stringify(action.payload))
      state.settings = action.payload
    },
    addToHistory: (state, action) => {
      state.history.push(action.payload)
      window.localStorage.setItem('history', JSON.stringify(state.history))
    },
    clearHistory: (state) => {
      state.history = []
    },
  },
})

export const {
  setCurrent,
  setState,
  setRunning,
  setLastSeen,
  clearLastSeen,
  setSettings,
  incCurrentBreak,
  addToHistory,
  clearHistory,
} = timerSlice.actions

export default timerSlice.reducer
