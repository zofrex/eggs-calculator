import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {abbrev_to_num} from './abbreviations';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

class NameForm extends Component {
    state = {
        currentChickens: 0,
        rate: 0,
        calm: 0,
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
        if(target <= 0) {
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

    render() {
        const actualRate = this.state.rate * 4 * (1 + this.state.calm / 100);
        const current = abbrev_to_num(this.state.currentChickens);
        const to10mil = 10000000 - current;
        const to250mil = 250000000 - current;
        const to1bil = 1000000000 - current;

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
                    Internal Hatchery Calm
                    <input name="calm" type="text" value={this.state.calm} onChange={this.handleChange}/>
                    %
                </label></div>
                <div>
                    10 million: {this.getTime(to10mil, actualRate)}<br/>
                    250 million: {this.getTime(to250mil, actualRate)}<br/>
                    1 billion: {this.getTime(to1bil, actualRate)}<br/>
                </div>
            </form>
        );
    }
}

export default NameForm;
