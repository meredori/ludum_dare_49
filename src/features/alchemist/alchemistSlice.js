import { createSlice } from '@reduxjs/toolkit'
import { brewPotion } from '../potions/potionSlice'

const initialState = {
  herbs: {},
}

export const alchemistSlice = createSlice({
  name: 'alchemist',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    [brewPotion](state, action) {
        console.log("Alchemist is making " + action.payload)
    }
  }
})
export const { decrement, incrementByAmount } = alchemistSlice.actions

export default alchemistSlice.reducer