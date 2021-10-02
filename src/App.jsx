import React from 'react';
import Gold from './features/gold/gold';
import PotionTable from './features/potions/potionTable';

class App extends React.Component {
    render() {
      return <div>
        <Gold></Gold>
        <PotionTable></PotionTable>
        </div>;
    }
  }

export default App;