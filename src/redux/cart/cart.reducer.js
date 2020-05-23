import CartActionTypes from "./cart.types";
const INITIAL_STATE = {
    isShow: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_SHOW:
            return {
                ...state,
                isShow: !state.isShow
            }
        default:
            return state;
    }
};

export default cartReducer;