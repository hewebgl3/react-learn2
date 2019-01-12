import React, { Component, PropTypes } from 'react';

const buttonStyle = {
  margin: '10px'
};

class CounterComponent extends Component {

  constructor(props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);

    this.state = {
      count: 0
    }
  }



  onClickIncrementButton() {
    this.setState({count: this.state.count + 1});
  }

  render() {

    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <span>总数: {this.state.count}</span>
      </div>
    );
  }
}


export default CounterComponent;