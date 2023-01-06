import {
    ADD_TOAST,
    DELETE_TOAST
} from './types';

import { v4 as uuidv4} from 'uuid';

/* ===================================
    Add toast
=================================== */
export const addToast = (title, message) => dispatch => {

    const id = uuidv4();

    dispatch({
        type: ADD_TOAST,
        payload: {id, title, message}
    })

    setTimeout(() => {
        dispatch({
            type: DELETE_TOAST,
            payload: id
        })
    }, 3000);
}

/* ===================================
    Delete toast
=================================== */
export const deleteToast = (id) => dispatch => {
    dispatch({
        type: DELETE_TOAST,
        payload: id
    })
}