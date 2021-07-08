import {
    ADD_TOAST,
    REMOVE_TOAST
} from './types';

import { v4 as uuidv4} from 'uuid';

/* ===================================
    Add toast
=================================== */
export const addToast = (type, title, message) => dispatch => {

    const id = uuidv4();

    dispatch({
        type: ADD_TOAST,
        payload: {id, type, title, message}
    })

    setTimeout(() => {
        dispatch({
            type: REMOVE_TOAST,
            payload: id
        })
    }, 3000);
}


/* ===================================
    Remove toast
=================================== */
export const removeToast = (id) => dispatch => {
    dispatch({
        type: REMOVE_TOAST,
        payload: id
    })
}


