import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';
import rootReducer from './reducers';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [thunk, sagaMiddleware];

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(mySaga);