import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: {}
}

export const potionsSlice = createSlice({
  name: 'potions',
  initialState,
  reducers: {
    startBrew: (state, action) => {
        console.log("Brewing Potion #" + action.payload)       
    },
    finishBrew: (state,action) => {
      state.current[action]
    },
    consume: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { startBrew, finishBrew, consume } = potionsSlice.actions

export default potionsSlice.reducer