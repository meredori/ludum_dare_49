import React from 'react';
import { connect  } from 'react-redux'
import {startBrew} from './potionSlice';
class PotionTable extends React.Component {
    render() {
      return <div className="potion-table">
          <button onClick={() => this.props.startBrew(1)}>Brew Potion</button>
      </div>;
    }
  }

  const mapStateToProps = (state) => ({
      potions: state.potions
  })
export default connect(mapStateToProps, {startBrew})(PotionTable);