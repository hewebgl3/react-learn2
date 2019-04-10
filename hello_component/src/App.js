import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickButton from "./ClickButton"
import CustomButton from './CustomButton';
import CustomButton2 from './CustomButton2';
import CustomButton3 from './CustomButton3';
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
        <CustomButton2 text="类型检查" num="xxx"/>
        <CustomButton3 people={{text:"小强",age:15,sex:"女",grade:12}}/>
      </div>
    );
  }
}

export default App;
