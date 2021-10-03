import React from "react";
import gatheringList from "./gatheringLocationData";
import GatheringLocation from "./gatheringLocation";
class GatheringLocationTable extends React.Component {
  render() {
    const gatheringLocations = gatheringList.map((location) => (
      <GatheringLocation key={location.id} type={location}></GatheringLocation>
    ));
    return (
      <div className="gathering-table">
        <h2>Gathering Table</h2>
        <table className="center">
          <thead>
            <tr>
              <th>Location</th>
              <th>Common</th>
              <th>Uncommon</th>
              <th>Rare</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{gatheringLocations}</tbody>
        </table>
      </div>
    );
  }
}
export default GatheringLocationTable;
