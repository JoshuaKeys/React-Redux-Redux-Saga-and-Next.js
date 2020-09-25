import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { selectionReducer } from './selectionReducer';

export default combineReducers({
    cities: cityReducer,
    selection: selectionReducer
})