import React, { Component } from 'react';

/**
 * 点击组件
 */
class ChildComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      date: new Date()
    }

  }

  // 在ES6语法中未执行
  getDefaultProps(){
    console.log('getDefaultProps');
  }

  // 在ES6语法中未执行
  getInitialState(){
    console.log('getInitialState');
  }

  componentWillMount () {
    // setTimeout(() => {
    //   this.setState({ date: new Date() })
    // }, 1000)
    console.log('componentWillMount');
    setTimeout(() => {
      console.log("5s后")
      this.setState({ date: new Date() })
    }, 5000)
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps');
  }


  componentWillUpdate () {
    console.log('componentWillUpdate');
  }

  componentDidUpdate () {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render() {
    // 多行必须用括号括起来，单行不用
    console.log("render")
    return (
      <div>
        子组件<br/>
        现在的时间是：{this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default ChildComponent;