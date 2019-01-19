import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
  'counter': 0,
};


const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function() {
    return counterValues;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register((action) => {
  if (action.type === ActionTypes.INCREMENT) {
    counterValues[action.counter] ++;
    CounterStore.emitChange();
  }
});

export default CounterStore;
