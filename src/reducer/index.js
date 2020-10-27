import {
    ADD_CITY,
    DELETE_CITY,
} from '../actions/index';

const initialState = {
    cities : [],
    nameCities: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload],
                nameCities: [...state.nameCities, action.payload.name]
            }
        case DELETE_CITY:
            console.log(action.payload)
            return {
                ...state,
                cities: state.cities.filter((c) => c.name !== action.payload),
                nameCities: state.nameCities.filter((c) => c !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;
