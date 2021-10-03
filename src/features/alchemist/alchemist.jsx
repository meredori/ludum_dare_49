import React from "react";
import { connect } from "react-redux";

class Alchemist extends React.Component {
  render() {
    return (
      <table className="task-display center">
        <tbody>
        <tr>
          <td>Task</td>
          <td>{this.props.currentTask}</td>
        </tr>
        <tr>
          <td>Time:</td>
          <td>{this.props.remainingTime}</td>
        </tr>
        <tr>
          <td>Effect:</td>
          <td>{this.props.effects.name}</td>
        </tr>
        <tr>
          <td>Remaining:</td>
          <td>{this.props.effects.duration}</td>
        </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  currentTask: state.alchemist.currentTask,
  remainingTime: state.alchemist.remainingTime,
  effects: state.potions.effects
});

export default connect(mapStateToProps)(Alchemist);
