import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickButton from "./ClickButton"
import CustomButton from './CustomButton';
import CounterComponent from "./CounterComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ClickButton />
        <CustomButton text="我的文字可以更改" num={1}/>
        <CounterComponent />
      </div>
    );
  }
}

export default App;
