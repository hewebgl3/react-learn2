import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      city: '',
      temp: ''
    }
  }
  componentDidMount() {
    if(this.props.source){
      $.get(this.props.source, function(result) {
        this.setState({
          city: result.city,
          temp:  result.temp
        });
      }.bind(this));
    }
  }

  render() {
    return (
      <div>
        <div>城市 <span>{this.state.city}</span></div>
        <div>天气 <span>{this.state.temp}</span></div>
      </div>
    );
  }
}

export default App;
