import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from '../components/Settings/settingsSlice'

export default configureStore({
  reducer: {
    settings: settingsSlice,
  },
})
