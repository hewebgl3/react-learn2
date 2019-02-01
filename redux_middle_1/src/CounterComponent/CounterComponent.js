import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {increment} from "./Actions"

const buttonStyle = {
  margin: '10px'
};


class CounterComponent extends Component {

  constructor(props, context) {
    super(props, context);
    console.log(props)

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
  }

  onClickIncrementButton() {
   // Actions.increment("counter");
   console.log("click me")
   this.props.onIncrement(1);
  }

  render() {

    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <span>总数: {this.props.count}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (count) => {
      dispatch(increment(count));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
