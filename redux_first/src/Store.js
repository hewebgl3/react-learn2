import {createStore} from 'redux';

import {reducer as counterReducer} from './CounterComponent';


export default createStore(counterReducer);
