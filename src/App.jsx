import React from 'react';
import Gold from './features/gold/gold';
import PotionTable from './features/potions/potionTable';

class App extends React.Component {
    render() {
      return <div>
        <h1 className="cursive">Potion Master Incremental</h1>
        <Gold></Gold>
        <PotionTable></PotionTable>
        </div>;
    }
  }

export default App;