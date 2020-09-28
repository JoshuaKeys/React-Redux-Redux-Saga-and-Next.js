import { SET_UNITS, SET_LANGUAGE } from "../types";

export function setUnits(id: number) {
    return {
        type: SET_UNITS,
        payload: id
    }
}
export function setLanguage(id: number) {
    return {
        type: SET_LANGUAGE,
        payload: id
    }
}