import { createAction, createSlice } from "@reduxjs/toolkit";
import herbList from "../herbs/herbsData";
import potionsList from "../potions/potionsList";

const initialState = {
  herbs: herbList,
  potions: potionsList,
  gold: 0,
  currentTask: "",
  remainingTime: 0,
  busy: false,
  potionSpeed: 1000,
  gatherSpeed: 1000
};

export const alchemistSlice = createSlice({
  name: "alchemist",
  initialState,
  reducers: {
    purchase(state, action) {
      state.gold -= action.payload;
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
    gatherHerbs(state,action){
      state.herbs[action.payload].count++;
    },
    setAction(state,action){
        state.currentTask = action.payload;
        if(state.currentTask == ""){
          state.busy = false;
        }
        else {
          state.busy = true;
        }
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
              switch(potion.id){
                case 0:
                  state.gold += potion.goldGain;
                  break;
              }
              
    },
    setPotionSpeed(state, action){
      if(action.payload != null){
        state.potionSpeed *= action.payload;
      }
      else {
        state.potionSpeed = initialState.potionSpeed;
      }
      
    },
    setGatherSpeed(state, action){
      if(action.payload != null){
        state.gatherSpeed *= action.payload;
      }
      else {
        state.gatherSpeed = initialState.potionSpeed;
      }
      
    },
    upgradePotion(state,action){
       switch(action.payload){
         case 0:
          state.potions[action.payload].goldGain *= 2;
       }
    },
    enablePotion(state){
      var disabled = state.potions.find(potion => !potion.enabled);
      state.potions[disabled.id].enabled = true;
    }
  },
});
export const { purchase, spendHerbs, setAction, setTaskTime, brewPotion, gatherHerbs, upgradePotion, enablePotion, setPotionSpeed, setGatherSpeed } = alchemistSlice.actions;

export default alchemistSlice.reducer;
