import { FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCESS } from "../types";
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