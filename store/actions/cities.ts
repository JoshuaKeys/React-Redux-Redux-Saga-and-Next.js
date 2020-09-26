import { FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCESS, DELETE_CITY_REQUEST, DELETE_CITY_SUCCESS, ADD_CITY_REQUEST, ADD_CITY_SUCCESS, EDIT_CITY_REQUEST, EDIT_CITY_SUCCESS, INIT_EDIT, CLEAR_MODAL } from "../types";
import { CityDTO } from "../../dtos/city.dto";

export function fetchCitiesRequest() {
    return {
        type: FETCH_CITIES_REQUEST
    }
}
export function fetchCitiesSuccess(cities: CityDTO[]) {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload: cities
    }
}
export function deleteCityRquest(city: CityDTO) {
    return {
        type: DELETE_CITY_REQUEST,
        payload: city
    }
}
export function deleteCitySuccess(city: CityDTO) {
    return {
        type: DELETE_CITY_SUCCESS,
        payload: city
    }
}
export function addCityRequest(name: string) {
    console.log(name);
    return {
        type: ADD_CITY_REQUEST,
        payload: {
            name
        }
    }
}
export function addCitySuccess(city: CityDTO) {
    return {
        type: ADD_CITY_SUCCESS,
        payload: city
    }
}
export function editCityRequest(city: CityDTO) {
    return {
        type: EDIT_CITY_REQUEST,
        payload: city
    }
}
export function editCitySuccess(city: CityDTO) {
    console.log(city);
    return {
        type: EDIT_CITY_SUCCESS,
        payload: city
    }
}
export function initEdit(city: CityDTO) {
    return {
        type: INIT_EDIT,
        payload: city
    }
}
export function clearModal() {
    return {
        type: CLEAR_MODAL
    }
}