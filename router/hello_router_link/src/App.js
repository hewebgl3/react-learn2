import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './page/Page1'
import Page2 from './page/Page2'
import Page3 from './page/Page3'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/1" component={Page1}/>
          <Route path="/2" component={Page2}/>
          <Route path="/3" component={Page3}/>
        </div>

      </Router>
    );
  }
}

export default App;
