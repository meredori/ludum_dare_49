import React from 'react'
import { connect  } from 'react-redux'

class Alchemist extends React.Component {
    render() {
      return <div className="task-display">
          <span>Task: {this.props.currentTask}</span>
          <span>Time: {this.props.remainingTime}</span>
      </div>;
    }
  }

  const mapStateToProps = (state) => ({
      currentTask: state.alchemist.currentTask,
      remainingTime: state.alchemist.remainingTime
  })
  
export default connect(mapStateToProps)(Alchemist);