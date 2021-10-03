import { createSlice } from "@reduxjs/toolkit";
import upgradeList from "./upgradesData";
import potionList from "../potions/potionsList";
import { upgradePotion, enablePotion } from "../alchemist/alchemistSlice";

const initialState = {
    upgrades: upgradeList
}

export const upgradesSlice = createSlice({
    name: "upgrade",
    initialState,
    reducers: {
        purchaseUpgrade(state, action){
            console.log("purchasing upgrade")
            state.upgrades[action.payload].tier++;
            state.upgrades[action.payload].price = Math.ceil(state.upgrades[action.payload].price * Math.pow(2, state.upgrades[action.payload].tier));
            switch(action.payload){
                case 0: {
                    if(state.upgrades[action.payload].tier <= potionList.length-1){
                        state.upgrades[action.payload].enabled = false;
                    }
                    break;;
                }
                case 1: {
                    break;
                }
            }

        }
    },
});

export const { purchaseUpgrade } = upgradesSlice.actions;

export default upgradesSlice.reducer;