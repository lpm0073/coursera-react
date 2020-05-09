import * as ActionTypes from './ActionTypes';
import { actionTypes } from 'react-redux-form';


export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case actionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case actionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};
            
        default: 
            return state;
    }
};
