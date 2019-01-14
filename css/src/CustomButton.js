import React, { Component } from 'react';

/**
 * 点击组件
 */
class CustomButton extends Component {

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

export default CustomButton;