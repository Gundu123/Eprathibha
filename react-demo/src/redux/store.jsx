import { legacy_createStore } from 'redux';
import Reducer from './reducer';

const Store= legacy_createStore(Reducer);

export default Store;