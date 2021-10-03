import { configureStore } from "@reduxjs/toolkit";
import alchemistReducer from '../features/alchemist/alchemistSlice';
import potionsSlice from "../features/potions/potionsSlice";
import upgradeReducer from '../features/upgrades/upgradesSlice';

export const store = configureStore({
    reducer: {
        alchemist: alchemistReducer,
        upgrades: upgradeReducer,
        potions: potionsSlice
    },
})