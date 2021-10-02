import React from 'react';
import { connect  } from 'react-redux'
import {startBrew} from './potionSlice'
import herbs from '../herbs/herbs.json'

class Potion extends React.Component {
    render() {
      const cost = this.props.type.baseCost.map((herb) => <span key={herb.herbId}>{herbs[herb.herbId].name} : {herb.amount}</span>)
      return <div className="potion">
          <span>{this.props.type.name}</span><br/>
          {cost}<br/>
          <button onClick={() => this.props.startBrew(this.props.type.id)}>Brew Potion</button>
      </div>;
    }
  }

  const mapStateToProps = (state) => ({
      potions: state.potions
  })
export default connect(mapStateToProps, {startBrew})(Potion);