import { configureStore } from "@reduxjs/toolkit";
import potionsReducer from '../features/potions/potionSlice'
import alchemistReducer from '../features/alchemist/alchemistSlice'

export const store = configureStore({
    reducer: {
        potions: potionsReducer,
        alchemist: alchemistReducer
    },
})