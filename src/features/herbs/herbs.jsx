import React from 'react'
import { connect  } from 'react-redux'

class Herbs extends React.Component {
    render() {
        const herbs = this.props.herbs.map((herb) => <li key={herb.id}><span>{herb.name} - {herb.count}</span></li>)
      return <div className="herb-display">
          <ul>
              {herbs}
          </ul>
      </div>;
    }
  }

  const mapStateToProps = (state) => ({
      herbs: state.alchemist.herbs
  })
  
export default connect(mapStateToProps)(Herbs);