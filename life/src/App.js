import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerComponent from "./ContainerComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerComponent />
      </div>
    );
  }
}

export default App;
