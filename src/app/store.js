import { configureStore } from "@reduxjs/toolkit";
import goldReducer from '../features/gold/goldSlice'
import potionsReducer from '../features/potions/potionSlice'

export const store = configureStore({
    reducer: {
        gold: goldReducer,
        potions: potionsReducer
    },
})