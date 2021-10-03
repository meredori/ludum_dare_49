import React from 'react';
import gatheringList from './gatheringLocationData';
import GatheringLocation from './gatheringLocation';
class GatheringLocationTable extends React.Component {
    render() {
      const gatheringLocations = gatheringList.map((location) => <li key={location.id}><GatheringLocation type={location}></GatheringLocation></li>)
      return <div className="gathering-table">
        <h2>Gathering Table</h2>
        <ul>
          {gatheringLocations}
        </ul>
      </div>;
    }
  }
export default GatheringLocationTable;