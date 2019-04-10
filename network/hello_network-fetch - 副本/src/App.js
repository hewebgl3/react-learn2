import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      fetch(this.props.source)
      .then(response => response.json())
      .then(result => {

        this.setState({
          city: result.weatherinfo.city,
          temp:  result.weatherinfo.temp
        });
      });
    }
  }

  render() {
    const style={
      color:'#f00'
    }
    return (
      <div>
        <div>城市:<span style={style}>{this.state.city}</span></div>
        <div>天气:<span style={style}>{this.state.temp}</span>度</div>
      </div>
    );
  }
}

export default App;
