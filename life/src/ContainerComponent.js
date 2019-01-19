import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

/**
 * 点击组件
 */
class ContainerComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }

  componentWillMount () {
    setTimeout(() => {
      console.log("15s后")
      this.setState({isShow:false})
    }, 15000)
  }


  render() {
    // 多行必须用括号括起来，单行不用
    let child = null;
    if (this.state.isShow) {
      child = <ChildComponent/>
    }
    return (
      <div>
        {child}
        
      </div>
    );
  }
}

export default ContainerComponent;