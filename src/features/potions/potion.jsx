import React from 'react';
import { connect  } from 'react-redux';
import herbList from '../herbs/herbsData';
import { spendHerbs, setAction, setTaskTime, brewPotion } from '../alchemist/alchemistSlice';
import potionsList from "../potions/potionsList";

class Potion extends React.Component {
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
            } else {
              this.props.brewPotion(potion);
            }
          }
          this.props.setTaskTime(this.props.remainingTime - 1);
        }, this.props.interval);
      } else {
        console.log("You dont have enough herbs");
      }
    }
    render() {
      const cost = this.props.type.baseCost.map((herb) => <span key={herb.herbId}>{herbList[herb.herbId].name} : {herb.amount}</span>)
      return <div className="potion">
          <span className="cursive">{this.props.type.name}</span>
          {cost}
          <button disabled={this.props.busy} onClick={() => this.brewPotion(this.props.type.id)}>Brew Potion</button>
      </div>;
    }
  }

  const mapStateToProps = (state) => ({
      herbs: state.alchemist.herbs,
      remainingTime: state.alchemist.remainingTime,
      busy: state.alchemist.busy,
      interval: state.alchemist.taskSpeed
  })
export default connect(mapStateToProps, {spendHerbs, setAction, setTaskTime, brewPotion})(Potion);