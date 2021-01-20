import { createStore } from 'redux';
import reducer from './reducerCounter';

const store = createStore(reducer);

export default store;