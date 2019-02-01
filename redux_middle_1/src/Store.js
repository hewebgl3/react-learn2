import {createStore,applyMiddleware} from 'redux';

import {reducer as counterReducer} from './CounterComponent';

import createLogger from 'redux-logger';
const logger = createLogger();

let createStoreWithMiddleware = applyMiddleware(logger)(createStore)

export default createStoreWithMiddleware(counterReducer);
