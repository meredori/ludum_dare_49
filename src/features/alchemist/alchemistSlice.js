import { createSlice } from "@reduxjs/toolkit";
import herbList from "../herbs/herbsList";
import potionsList from "../potions/potionsList";

const initialState = {
  herbs: herbList,
  potions: potionsList,
  gold: 0,
  currentTask: "",
  remainingTime: 0,
};

export const alchemistSlice = createSlice({
  name: "alchemist",
  initialState,
  reducers: {
    purchase(state, action) {
      state.gold -= action;
    },
    spendHerbs(state,action){
        action.payload.forEach((herb) => {
            state.herbs[herb.herbId].count -= herb.amount;
            console.log(
              "You have %d %s left",
              state.herbs[herb.herbId].count,
              state.herbs[herb.herbId].name
            );
          });
    },
    setAction(state,action){
        state.currentTask = action.payload;
    },
    setTaskTime(state,action){
        state.remainingTime = action.payload;
    },
    brewPotion(state,action){
        var potion = state.potions[action.payload.id];
        potion.count++;
              console.log(
                "Alchemist has made %d %s",
                potion.count,
                potion.name
              );
              state.gold += 2;
    }
  },
});
export const { purchase, spendHerbs, setAction, setTaskTime, brewPotion } = alchemistSlice.actions;

export default alchemistSlice.reducer;
