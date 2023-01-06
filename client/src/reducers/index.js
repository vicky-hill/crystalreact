/* eslint-disable */
import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './alerts';
import toasts from './toasts';

export default combineReducers({
    auth,
    alerts,
    toasts
});