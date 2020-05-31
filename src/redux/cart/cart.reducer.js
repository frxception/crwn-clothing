import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
                //TODO: Ideally we should put the logic from cart utils in here right???
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    item => item.id !== action.payload.id
                )
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;