//const axios = require('axios');

export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";

export function addCity (city) {
    return function(dispatch) {
            dispatch({
              type: ADD_CITY,
              payload: city
            })
  }
}

export function deleteCity(city) {
    return function(dispatch) {
        dispatch({
            type: DELETE_CITY,
            payload: city
        })
    }
}