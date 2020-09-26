import { takeEvery, delay, put } from "redux-saga/effects"
import { FETCH_CITIES_SUCCESS, FETCH_CITIES_REQUEST, ADD_CITY_REQUEST, DELETE_CITY_REQUEST, DELETE_CITY_SUCCESS, DELETE_CITY_FAILURE, EDIT_CITY_REQUEST } from "../types";
import { CityDTO } from "../../dtos/city.dto";
import { addCitySuccess, editCitySuccess } from "../actions/cities";

export async function* fetchCitiesRequest() {
    const cities = await fetch('http://localhost:3000/api/city');
    const citiesData = await cities.json() as CityDTO[];

    yield put({ type: FETCH_CITIES_SUCCESS, payload: citiesData });
}
export function* addCityRequest(action) {
    const added = yield fetch(`http://localhost:3000/api/city`, {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (added.status === 200) {
        const addedCity = yield added.json();
        return yield put(addCitySuccess(addedCity))
    }
}
export function* deleteCity(action) {
    const deleteRequest = yield fetch(`http://localhost:3000/api/city?id=${action.payload.id}`, {
        method: 'DELETE'
    })

    if (deleteRequest.status === 200) {
        return yield put({ type: DELETE_CITY_SUCCESS, payload: action.payload })
    }
    yield put({ type: DELETE_CITY_FAILURE, payload: action.payload })
}
export function* editCity(action) {
    console.log(action.payload);
    const updateRequest = yield fetch('http://localhost:3000/api/city', {
        method: 'PUT',
        body: JSON.stringify(action.payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (updateRequest.status === 200) {
        const updatedItem: CityDTO = yield updateRequest.json();
        return yield put(editCitySuccess(updatedItem))
    }
}

export function* watchCity() {
    yield takeEvery(FETCH_CITIES_REQUEST, fetchCitiesRequest);
    yield takeEvery(ADD_CITY_REQUEST, addCityRequest)
    yield takeEvery(DELETE_CITY_REQUEST, deleteCity)
    yield takeEvery(EDIT_CITY_REQUEST, editCity)
}