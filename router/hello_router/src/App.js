import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './page/page1'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Page1}/>
      </Router>
    );
  }
}

export default App;
