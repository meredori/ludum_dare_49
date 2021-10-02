import React from 'react'
import { connect  } from 'react-redux'

class Gold extends React.Component {
    render() {
      return <div className="gold-display">
          <span>Gold: {this.props.gold}</span>
      </div>;
    }
  }

  const mapStateToProps = (state) => ({
      gold: state.gold.value
  })
  
export default connect(mapStateToProps)(Gold);