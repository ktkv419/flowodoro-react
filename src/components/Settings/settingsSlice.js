import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    bigbreak: false,
  },
  reducers: {
    changeBigBreak: (state) => {
      //
    },
  },
})

export default settingsSlice.reducer
