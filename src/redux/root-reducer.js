import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import storage from "redux-persist/lib/storage"; //NOTE: This is lib will use localstorage (you can use sessionstorage also)

const persistCfg = {
    key: 'root',
    storage,
    whitelist: ['cart'] //NOTE: Persist only the cart store as we dont need the user store to be persisted.
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistCfg, rootReducer)