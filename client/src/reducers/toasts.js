import {
    ADD_TOAST,
    DELETE_TOAST
} from '../actions/types';

const initialState = []


export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case ADD_TOAST: 
            return [...state, payload];

        case DELETE_TOAST: 
            return state.filter((toast) => toast.id !== payload);



        default: 
            return state
    }
}
