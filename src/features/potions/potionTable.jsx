import React from 'react';
import Potion from './potion';
import potionList from './potions.json';
class PotionTable extends React.Component {
    render() {
      const potions = potionList.map((potion) => <li key={potion.id}><Potion type={potion}></Potion></li>)
      return <div className="potion-table">
        <h2>Potions Table</h2>
        <ul>
          {potions}
        </ul>
      </div>;
    }
  }
export default PotionTable;