import React from 'react';
import Gold from './features/gold/gold'
import PotionTable from './features/potions/potionTable'
import GatheringLocationTable from './features/gathering/gatheringLocationTable'
import Alchemist from './features/alchemist/alchemist'
import Herbs from './features/herbs/herbs'

class App extends React.Component {
    render() {
      return <div>
        <h1 className="cursive">Potion Master Incremental</h1>
        <Gold />
        <Alchemist />
        <Herbs />
        <PotionTable></PotionTable>
        <GatheringLocationTable></GatheringLocationTable>
        </div>;
    }
  }

export default App;