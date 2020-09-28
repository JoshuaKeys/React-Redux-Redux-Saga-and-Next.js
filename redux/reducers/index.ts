import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { selectionReducer } from './selectionReducer';
import { editModalReducer } from './editModalReducer';

export default combineReducers({
    cities: cityReducer,
    selection: selectionReducer,
    editModal: editModalReducer
})