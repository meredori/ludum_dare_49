import React from "react";
import { connect } from "react-redux";
import Upgrade from "./upgrades";
class UpgradesTable extends React.Component {
  render() {
    const upgrades = this.props.upgrades
      .filter((upgrade) => upgrade.enabled)
      .map((upgrade) => <Upgrade key={upgrade.id} type={upgrade}></Upgrade>);
    return (
      <div className="upgrades-table">
        <h2>Upgrades Table</h2>
        <table className="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tier</th>
              <th>Summary</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{upgrades}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  upgrades: state.upgrades.upgrades,
});
export default connect(mapStateToProps)(UpgradesTable);
