import { takeEvery, delay, put } from "redux-saga/effects"
import { FETCH_CITIES_SUCCESS, FETCH_CITIES_REQUEST } from "../types";
import { CityDTO } from "../../dtos/city.dto";

export async function* fetchCitiesRequest() {
    const cities = await fetch('http://localhost:3000/api/city');
    const citiesData = await cities.json() as CityDTO[];

    yield put({ type: FETCH_CITIES_REQUEST, payload: citiesData });
}

export function* watchCity() {
    yield takeEvery('FETCH_CITIES_REQUEST', fetchCitiesRequest)
}