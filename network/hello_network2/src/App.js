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
      // result返回的是字符串
      $.get(this.props.source, function(result) {
        // 字符串转json对象
        result = JSON.parse(result)
        this.setState({
          city: result.weatherinfo.city,
          temp:  result.weatherinfo.temp
        });
      }.bind(this));
    }
  }

  render() {
    const style={
      color:'#f00'
    }
    return (
      <div>
        <div>城市:<span style={style}>{this.state.city}</span></div>
        <div>天气:<span style={style}>{this.state.temp}度</span></div>
      </div>
    );
  }
}

export default App;
