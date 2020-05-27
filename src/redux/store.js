import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; //NOTE: For Dev only
// import {composeWithDevTools} from 'redux-devtools-extension';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'; //NOTE: For production only


import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
    )
);

export default store;