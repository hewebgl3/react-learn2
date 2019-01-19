// 导入动作类型
import * as ActionTypes from './ActionTypes.js';
// 导入动作分发器
import AppDispatcher from './AppDispatcher.js';

export const increment = (counter) => {
  // 分发动作，每个动作必须有一个type，可以有或者没有值
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counter: counter
  });
};
