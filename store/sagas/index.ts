import { all } from 'redux-saga/effects'
import { watchCity } from './city.saga'
export default function* rootSaga() {
    yield all([watchCity()])
}