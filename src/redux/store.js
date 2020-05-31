import {createStore, applyMiddleware} from 'redux';
import {persistStore} from "redux-persist";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; //NOTE: For Dev only
// import {composeWithDevTools} from 'redux-devtools-extension';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'; //NOTE: For production only


import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
    )
);

export const persistor = persistStore(store)

export default {store, persistor};