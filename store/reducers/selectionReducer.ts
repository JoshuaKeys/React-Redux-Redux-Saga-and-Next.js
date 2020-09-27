import { SelectionDTO } from "../../dtos/selection.dto";
import { DropdownDTO } from "../../dtos/dropdown.dto";
import { SET_LANGUAGE, SET_UNITS } from "../types";

const initialState: SelectionDTO = {
    units: [
        {
            id: 0,
            title: 'standard',
            selected: true,
        },
        {
            id: 1,
            title: 'metric',
            selected: false,
        },
        {
            id: 2,
            title: 'imperial',
            selected: false,
        }
    ],
    language: [
        {
            id: 0,
            title: 'ua',
            selected: false,
        },
        {
            id: 1,
            title: 'en',
            selected: true,
        },
        {
            id: 2,
            title: 'ru',
            selected: false,
        }
    ]
};

export const selectionReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LANGUAGE: {
            const index = state.language.findIndex(lang => lang.id === action.payload);
            let stateCopy = { ...state };
            let languages = stateCopy.language.map(lang => {
                lang.selected = false;
                return lang;
            });
            languages[index].selected = true;
            return { ...stateCopy, language: languages }
        }

        case SET_UNITS: {
            const index = state.units.findIndex(unit => unit.id === action.payload);
            let stateCopy = { ...state };
            let units = stateCopy.units.map(unit => {
                unit.selected = false;
                return unit;
            });
            units[index].selected = true;
            return { ...stateCopy, units }
        }

        default:
            return state;
    }
}