import React from 'react';
import { connect  } from 'react-redux';
import herbList from '../herbs/herbsData';
import { spendHerbs, setAction, setTaskTime, brewPotion, setPotionSpeed } from '../alchemist/alchemistSlice';
import { finishPotion, triggerEffect, removeEffect } from './potionsSlice';
import potionsList from "./potionsList";

class Potion extends React.Component {
    clearEffect(){
      switch(this.props.effects.id){
        case 0: {
          this.props.setPotionSpeed();
          break;
        }
      }   
      this.props.removeEffect(this.props.effects.id);
    }
    brewPotion(id){
      var haveResources = true;
      var potion = potionsList[id];
      //loop through herbs to confirm can afford
      potion.baseCost.forEach((herb) => {
        if (this.props.herbs[herb.herbId].count < herb.amount) {
          haveResources = false;
        }
      });
      if (haveResources) {
        this.props.spendHerbs(potion.baseCost);
        var timeout = potion.time;
        this.props.setAction("Brewing " + potion.name);
        this.props.setTaskTime(potion.time);
        var i = setInterval(() => {
          if (this.props.remainingTime <= 1) {
            clearInterval(i);
            var result = Math.floor(Math.random() * 100);
            this.props.setAction("");
            if (result < potion.baseFailure) {
              console.log("Potion blew up");
              this.clearEffect()
            } else {
              this.props.brewPotion(potion);
              if(this.props.effects.name != ""){
                this.props.triggerEffect();
                if(this.props.effects.duration <= 0){
                  this.clearEffect()           
                }
              }
              this.props.finishPotion(potion);
              switch(potion.id){
                case 1: {
                  this.props.setPotionSpeed(.75);
                  break;
                }
              }
            }
          }
          this.props.setTaskTime(this.props.remainingTime - 1);
        }, this.props.interval);
      } else {
        console.log("You dont have enough herbs");
      }
    }
    render() {
      const cost = this.props.type.baseCost.map((herb) => <td key={herb.herbId}>{herbList[herb.herbId].name} : {herb.amount}</td>)
      return <tr className="potion">
          <td>{this.props.type.name}</td>
          <td>{this.props.type.summary}</td>
          {cost}
          <td>{this.props.type.baseFailure}</td>
          <td><button disabled={this.props.busy} onClick={() => this.brewPotion(this.props.type.id)}>Brew Potion</button></td>
      </tr>;
    }
  }

  const mapStateToProps = (state) => ({
      herbs: state.alchemist.herbs,
      remainingTime: state.alchemist.remainingTime,
      busy: state.alchemist.busy,
      interval: state.alchemist.potionSpeed,
      effects: state.potions.effects
  })
export default connect(mapStateToProps, {spendHerbs, setAction, setTaskTime, brewPotion, finishPotion, triggerEffect, removeEffect, setPotionSpeed})(Potion);