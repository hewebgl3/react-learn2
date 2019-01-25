import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransitionGroup from 'react-addons-css-transition-group';


class App extends Component {

  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      items: ["北京",
      "上海",
      "广州",
      "深圳"]
    };

    // ES6 类中函数必须手动绑定
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(){
    var newItems = this.state.items.concat('four');
    this.setState({
        'items':newItems
    });
  }

  removeItem(i){
    var newItems = this.state.items;
    newItems.splice(i,1);
    this.setState({
        'items':newItems
    });
  }

  render() {
    var $this = this;
    var List = this.state.items.map(function(value,index){
        return <div key={value} onClick = {$this.removeItem.bind($this,index)}> { value}</div>
    });
    return (
        <div>
            <button onClick={this.addItem}>add Item</button>
            <TransitionGroup
                transitionName='example'
                transitionEnterTimeout={3000}
                transitionLeaveTimeout={2000}>
                {List}
            </TransitionGroup>
        </div>
    )
  }
}

export default App;
