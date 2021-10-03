import React from 'react';
import Gold from './features/gold/gold'
import PotionTable from './features/potions/potionTable'
import GatheringLocationTable from './features/gathering/gatheringLocationTable'
import Alchemist from './features/alchemist/alchemist'
import Herbs from './features/herbs/herbs'
import UpgradesTable from './features/upgrades/upgradesTable';

class App extends React.Component {
    render() {
      return <div className="app">
        <h1 className="cursive">Potion Master Incremental</h1>
        <Gold />
        <Alchemist />
        <Herbs />
        <PotionTable></PotionTable>
        <GatheringLocationTable></GatheringLocationTable>
        <UpgradesTable></UpgradesTable>
        </div>;
    }
  }

export default App;