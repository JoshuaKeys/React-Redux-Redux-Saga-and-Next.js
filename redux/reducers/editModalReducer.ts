import { EditModalDTO } from './../../dtos/edit-modal.dto'
import { INIT_EDIT, CLEAR_MODAL } from '../types';
const initialState: EditModalDTO = {
    city: null
}
export function editModalReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_EDIT:
            return {
                ...state,
                city: action.payload
            }
        case CLEAR_MODAL:
            return {
                ...state,
                city: null
            }
        default:
            return state;
    }
}