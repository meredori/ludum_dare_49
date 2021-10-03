import { createSlice } from "@reduxjs/toolkit";
import { setTaskSpeed } from '../alchemist/alchemistSlice';

const initialState = {
    effects: {
        "id": null,
        "name" : "",
        "duration" : 0
    },
    hasteDuration : 5
}

export const potionsSlice = createSlice({
    name: "potions",
    initialState,
    reducers: {
        finishPotion(state, action){
            switch(action.payload.id){
                case 1:
                    state.effects.name = "Haste"
                    state.effects.duration = state.hasteDuration;
                    state.effects.id = 0;
                    break;
            }
        },
        triggerEffect(state) {
            console.log("Triggering %s with %d times left", state.effects.name, state.effects.duration);
            if(state.effects.duration != 0){
                state.effects.duration--;
            }
        },
        removeEffect(state) {
            state.effects.name = "";
            state.effects.duration = 0;
            state.effects.id = null;
            console.log("Removing Effect");
        },
        upgradeHaste(state){
            state.hasteDuration *= 2;
        }
    }
});

export const { triggerEffect, finishPotion, removeEffect, upgradeHaste } = potionsSlice.actions;

export default potionsSlice.reducer;