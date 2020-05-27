import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    isShow: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_SHOW:
            return {
                ...state,
                isShow: !state.isShow
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload] //NOTE: Spread all previous state cart items then the next arg is the newly added coming cart item as payload
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            
        default:
            return state;
    }
};

export default cartReducer;