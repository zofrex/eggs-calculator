import React, { Component } from 'react';
import './App.css';
import {abbrev_to_num} from './abbreviations';

class App extends Component {
    state = {
        current: 'trophies'
    };

    render() {
        const current = this.state.current == 'trophies' ? <TrophyCalculator/> : <ChickenBoxCalculator/>;

        return (
            <React.Fragment>
                <p>
                    <button id="nav_trophies" name="trophies" onClick={this.switch} disabled={this.state.current == "trophies" ? true : false}>Trophies</button>
                    <button id="nav_chickenBoxes" name="chickenBoxes" onClick={this.switch} disabled={this.state.current == "chickenBoxes" ? true : false}>Chicken Boxes</button>
                </p>

                { current }
            </React.Fragment>
        );
    }

    switch = (event) => {
        this.setState({
            current: event.target.name
        });
    }
}

export class TrophyCalculator extends Component {
    state = {
        currentChickens: 0,
        rate: 0,
        calm: 0,
        warpHours: 0,
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    getOutput = () => {
        return this.state.currentChickens + this.state.rate * 4 * (1 + this.state.calm / 100);
    }

    getTime = (target, rate) => {
        if (target <= 0) {
            return "✅";
        }
        else if (rate <= 0) {
            return "❌";
        }
        else {
            let minutes = Math.ceil(target / rate);
            const days = Math.floor(minutes / 60 / 24);
            minutes = minutes - 24 * 60 * days;
            const hours = Math.floor(minutes / 60);
            minutes = minutes - 60 * hours;
            return days + "d " + hours + "h " + minutes + "m";
        }
    }

    getWarps = (target, rate, hours) => {
        if (target <= 0) {
            return "✅";
        }
        else if (rate <= 0) {
            return "❌";
        }
        else if (hours <= 0) {
            return "..."
        }
        else {
            let chickensPerWarp = rate * 4 * 60 * hours
            let result = Math.ceil(target/chickensPerWarp)
            let plural = result <= 1 ? " warp" : " warps"
            return result + plural
        }
    }

    render() {
        const awayRate = this.state.rate * 4 * (1 + this.state.calm / 100);
        const current = abbrev_to_num(this.state.currentChickens);
        const to10mil  = 10000000 - current;
        const to50mil  = 50000000 - current;
        const to250mil = 250000000 - current;
        const to1bil   = 1000000000 - current;
        const to10bil  = 10000000000 - current;

        return (
            <form onSubmit={this.handleSubmit}>
                <div><label>
                    Current chickens:
                    <input name="currentChickens" type="text" value={this.state.currentChickens}
                           onChange={this.handleChange}/>
                </label></div>
                <div><label>
                    Hatchery rate:
                    <input name="rate" type="text" value={this.state.rate} onChange={this.handleChange}/>
                    chickens/hab/minute
                </label></div>
                <div><label>
                    Internal Hatchery Calm:
                    <input name="calm" type="text" value={this.state.calm} onChange={this.handleChange}/>
                    %
                </label></div>
                <div>
                    10 million: {this.getTime(to10mil, awayRate)}<br/>
                    50 million: {this.getTime(to50mil, awayRate)}<br/>
                    250 million: {this.getTime(to250mil, awayRate)}<br/>
                    1 billion: {this.getTime(to1bil, awayRate)}<br/>
                    10 billion: {this.getTime(to10bil, awayRate)}<br/>
                </div>
                <div>
                    <br/>
                    OR <br/>
                    <br/>
                </div>

                <div><label>
                    Long warp time:
                    <input name="warpHours" type="text" value={this.state.warpHours} onChange={this.handleChange}/>
                    hours
                </label></div>
                <div>
                    10 million: {this.getWarps(to10mil, this.state.rate, this.state.warpHours)}<br/>
                    50 million: {this.getWarps(to50mil, this.state.rate, this.state.warpHours)}<br/>
                    250 million: {this.getWarps(to250mil, this.state.rate, this.state.warpHours)}<br/>
                    1 billion: {this.getWarps(to1bil, this.state.rate, this.state.warpHours)}<br/>
                    10 billion: {this.getWarps(to10bil, this.state.rate, this.state.warpHours)}<br/>
                </div>
            </form>
        );
    }
}

export class ChickenBoxCalculator extends Component {
    render() {
        return (
            <div>
                <p>
                  <label>Internal hatchery rate: <input name="rate" type="text" value="0"/></label> min/hab<br/>
                  <label>Internal hatchery calm: +<input name="calm" type="text" value="0"/>%</label><br/>
                  <label>Population: <input name="population" type="text" value="0"/></label><br/>
                </p>
                <p>
                  Chickens per hour (app closed): 0<br/>
                  Chickens per hour (app open): 0<br/>
                  Difference: 0
                </p>
                <p>Difference is equivalent to:</p>
                <p>
                  <b>0</b> 12% chicken boxes<br/>
                  <b>0</b> 3% chicken boxes<br/>
                </p>
            </div>
          );
    }
}

export default App;
