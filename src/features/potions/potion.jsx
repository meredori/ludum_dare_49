import React from 'react';
import { connect  } from 'react-redux'
import {brewPotion} from './potionSlice'
import herbs from '../herbs/herbs.json'

class Potion extends React.Component {
    render() {
      const cost = this.props.type.baseCost.map((herb) => <span key={herb.herbId}>{herbs[herb.herbId].name} : {herb.amount}</span>)
      return <div className="potion">
          <span className="cursive">{this.props.type.name}</span>
          {cost}
          <button onClick={() => this.props.brewPotion(this.props.type.id)}>Brew Potion</button>
      </div>;
    }
  }

  const mapStateToProps = (state) => ({
      potions: state.potions
  })
export default connect(mapStateToProps, {brewPotion})(Potion);