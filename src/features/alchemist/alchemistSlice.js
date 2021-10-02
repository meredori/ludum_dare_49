import { createSlice } from '@reduxjs/toolkit'
import { brewPotion } from '../potions/potionSlice'
import herbList from '../herbs/herbsList'
import potionsList from '../potions/potionsList'

const initialState = {
  herbs: herbList,
  potions: potionsList,
  gold : 0
}

export const alchemistSlice = createSlice({
  name: 'alchemist',
  initialState,
  reducers: {
      purchase(state, action) {
          state.gold -= action;
      },
  },
  extraReducers: {
    [brewPotion](state, action) {
        var haveResources = true;
        state.potions[action.payload].baseCost.forEach((herb) => {
            if(state.herbs[herb.herbId].count < herb.amount){
                haveResources = false;
            }
        })
        if(haveResources){
            state.potions[action.payload].baseCost.forEach((herb) => {
                state.herbs[herb.herbId].count -= herb.amount
                console.log("You have %d %s left", state.herbs[herb.herbId].count, state.herbs[herb.herbId].name)
            })
            var result = Math.floor(Math.random() * 100)
            if(result < state.potions[action.payload].baseFailure){
                console.log("Potion blew up")
            }
            else {
                state.potions[action.payload].count++;
                console.log("Alchemist has made %d %s", state.potions[action.payload].count, state.potions[action.payload].name)
                state.gold += 2;
            }
        }
        else {
            console.log("You dont have enough herbs")
        }


    }
  }
})
export const {} = alchemistSlice.actions

export default alchemistSlice.reducer