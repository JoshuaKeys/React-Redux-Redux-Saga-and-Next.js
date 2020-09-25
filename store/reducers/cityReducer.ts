import * as types from '../types';
import { Action } from 'redux';

const initialState = []

export const cityReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_CITIES_SUCCESS:
            return payload;
        default:
            return state;
    }
}