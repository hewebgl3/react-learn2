import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * 点击组件
 */
class CustomButton2 extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    // 多行必须用括号括起来，单行不用
    return (
      <div>
        <button>{this.props.text},{this.props.num}</button>
      </div>
    );
  }
}

CustomButton2.propTypes = {
  text: PropTypes.string,
  num:PropTypes.number
};

export default CustomButton2;