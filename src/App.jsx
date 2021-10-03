import React from 'react';
import Gold from './features/gold/gold'
import PotionTable from './features/potions/potionTable'
import Alchemist from './features/alchemist/alchemist'

class App extends React.Component {
    render() {
      return <div>
        <h1 className="cursive">Potion Master Incremental</h1>
        <Gold />
        <Alchemist />
        <PotionTable></PotionTable>
        </div>;
    }
  }

export default App;