import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        currentRate: 0,
        currentChickens: 0
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
        return this.state.currentRate * this.state.currentChickens;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div><label>
                    Current rate:
                    <input name="currentRate" type="text" value={this.state.currentRate} onChange={this.handleChange}/>
                </label></div>
                <div><label>
                    Current chickens:
                    <input name="currentChickens" type="text" value={this.state.currentChickens}
                           onChange={this.handleChange}/>
                </label></div>
                <div>Rate: {this.getOutput()}</div>
            </form>
        );
    }
}

export default NameForm;
