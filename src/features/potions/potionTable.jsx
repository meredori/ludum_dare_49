import React from "react";
import { connect } from "react-redux";
import Potion from "./potion";
class PotionTable extends React.Component {
  render() {
    const potions = this.props.potions
      .filter((pot) => pot.enabled)
      .map((potion) => <Potion key={potion.id} type={potion}></Potion>);
    return (
      <div className="potion-table">
        <h2>Potions Table</h2>
        <table className="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Failure Chance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{potions}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  potions: state.alchemist.potions,
});
export default connect(mapStateToProps)(PotionTable);
