import * as ActionTypes from './ActionTypes';
import { actionTypes } from 'react-redux-form';


export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case actionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};

        case actionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, promotions: []};
            
        default: 
            return state;
    }
};
