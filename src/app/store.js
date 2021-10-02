import { configureStore } from "@reduxjs/toolkit";
import goldReducer from '../features/gold/goldSlice'
import potionsReducer from '../features/potions/potionSlice'
import alchemistReducer from '../features/alchemist/alchemistSlice'

export const store = configureStore({
    reducer: {
        gold: goldReducer,
        potions: potionsReducer,
        alchemist: alchemistReducer
    },
})