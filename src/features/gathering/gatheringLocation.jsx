import React from 'react'
import { connect  } from 'react-redux'
import herbList from '../herbs/herbsData'
import { setAction, setTaskTime, gatherHerbs } from '../alchemist/alchemistSlice';
import rarity from '../../enums/rarity';

class GatheringLocation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gathering: false,
            gatherInterval: null
        }
    }
    gatherHerbs(id){
        var gather;
        if(!this.state.gathering){
            this.setState({gathering : true});
            this.props.setAction("Gathering at " + this.props.type.name);
            var time = 0;
            gather = setInterval(() => {
                console.log("Gathering");
                var roll = Math.floor(Math.random()*100);
                var herbs;
                if(roll < 3){
                    herbs = this.props.type.herbsAvailable.filter(herb => herb.rarity == rarity.RARE)
                    console.log("Rare herb!")
                }
                else if (roll < 8){
                    herbs = this.props.type.herbsAvailable.filter(herb => herb.rarity == rarity.UNCOMMON)
                    console.log("Uncommon herb!")
                }
                else if (roll < 80){
                    herbs = this.props.type.herbsAvailable.filter(herb => herb.rarity == rarity.COMMON)
                }
                else {
                    herbs = null;
                    console.log("Didn't find anything")
                }
                if(herbs != null){
                    var selectedHerb = herbs[Math.floor(Math.random()*herbs.length)];
                    console.log("Found %s", herbList[selectedHerb.herbId].name);
                    this.props.gatherHerbs(selectedHerb.herbId);
                }
                time++
                this.props.setTaskTime(time);
            }, this.props.interval);
            this.setState({gatherInterval : gather});
        }
        else {
            this.setState({gathering : false});
            this.props.setAction("");
            clearInterval(this.state.gatherInterval);
            this.props.setTaskTime(0);
        }
    }
    render() {
        const common = this.props.type.herbsAvailable.map((herb) => <span key={herb.herbId}>{herbList[herb.herbId].name} : {herb.rarity}</span>)
        var button;
        if(this.state.gathering){
            button = <button onClick={() => this.gatherHerbs(this.props.type.id)}>Stop Gathering</button>
        }
        else {
            button = <button disabled={this.props.busy} onClick={() => this.gatherHerbs(this.props.type.id)}>Gather Herbs</button>
        }
        return <div className="gathering-location">
            <span className="cursive">{this.props.type.name}</span>
            {common}
            {button}
        </div>;
    }
  }

  const mapStateToProps = (state) => ({
    remainingTime: state.alchemist.remainingTime,
    interval: state.alchemist.taskSpeed,
    busy: state.alchemist.busy,
  })
  
export default connect(mapStateToProps, {setAction, setTaskTime, gatherHerbs})(GatheringLocation);