import React from 'react';
import { connect  } from 'react-redux';
import herbList from '../herbs/herbsData';
import potionsList from "../potions/potionsList";
import { purchaseUpgrade } from './upgradesSlice';
import {upgradeHaste} from '../potions/potionsSlice';
import { purchase, enablePotion, upgradePotion, setGatherSpeed } from '../alchemist/alchemistSlice';

class Upgrade extends React.Component {
    activateUpgrade(id){
        const upgrade = this.props.upgrades.upgrades[id]
        if(this.props.gold >= upgrade.price){
            this.props.purchase(upgrade.price);
            this.props.purchaseUpgrade(id);
            switch(id){
                case 0: {
                    this.props.enablePotion();
                    break;
                }
                case 1: {
                    this.props.upgradePotion(0);
                    break;
                }
                case 2: {
                    this.props.setGatherSpeed(.75);
                    break;
                }
                case 3: {
                    this.props.upgradeHaste();
                    break;
                }
            }
        }
        
    }
    render() {
      return <tr className="upgrade">
          <td>{this.props.type.name}</td>
          <td>{this.props.type.tier}</td>
          <td>{this.props.type.summary}</td>
          <td>{this.props.type.price}</td>
          <td><button disabled={this.props.gold < this.props.type.price} onClick={() => this.activateUpgrade(this.props.type.id)}>Purchase Upgrade</button></td>
      </tr>;
    }
  }

  const mapStateToProps = (state) => ({
      gold: state.alchemist.gold,
      upgrades: state.upgrades
  })
export default connect(mapStateToProps,{purchaseUpgrade, purchase, enablePotion, upgradePotion, setGatherSpeed,upgradeHaste})(Upgrade);