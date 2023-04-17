import { configureStore } from '@reduxjs/toolkit'
import timerSlice from './timerSlice'

export default configureStore({
  reducer: {
    timer: timerSlice,
  },
})
