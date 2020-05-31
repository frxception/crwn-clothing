import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; //NOTE: This is lib will use localstorage (you can use sessionstorage also)

const persistCfg = {
    key: 'root',
    storage,
    whitelist: ['cart'] //NOTE: Persist only the cart store as we dont need the user store to be persisted.
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistCfg, rootReducer)