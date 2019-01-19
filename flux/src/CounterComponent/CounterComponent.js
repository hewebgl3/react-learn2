import React, { Component, PropTypes } from 'react';
import * as Actions from './Actions.js';
import CounterStore from './stores/CounterStore.js';

const buttonStyle = {
  margin: '10px'
};

class CounterComponent extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);

    this.state = {
      count: CounterStore.getCounterValues()["counter"]
    }
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  onChange() {
    const newCount = CounterStore.getCounterValues()["counter"];
    this.setState({count: newCount});
  }


  onClickIncrementButton() {
    Actions.increment("counter");
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