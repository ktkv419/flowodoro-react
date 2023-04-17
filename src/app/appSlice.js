import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    showModal: false,
    breakCoef: 0.3,
  },
  reducers: {
    setModal: (state) => {
      state.showModal = true
    },
  },
})

export default appSlice.reducer

export const appActions = appSlice.actions
