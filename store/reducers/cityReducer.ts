import * as types from '../types';
import { Action } from 'redux';
import { CityDTO } from '../../dtos/city.dto';

const initialState: CityDTO[] = []

export const cityReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_CITIES_SUCCESS:
            return payload;
        case types.DELETE_CITY_SUCCESS:
            return state.filter(city => city.id !== payload.id);
        case types.ADD_CITY_SUCCESS:
            console.log(payload)
            return [...state, payload];
        case types.EDIT_CITY_SUCCESS:
            const updatedState = [...state].map(city => {
                return city.id === payload.id ? payload : city
            })
            return updatedState;
        default:
            return state;
    }
}