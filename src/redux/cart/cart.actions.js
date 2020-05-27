import CartActionTypes from './cart.types'

export const toggleShowCart = () => ({
    type: CartActionTypes.TOGGLE_SHOW
});

export const addItem = item => (
    {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
)

