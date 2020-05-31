import { createSelector } from 'reselect'

//NOTE: Memoization cache implementation for cart items.

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [ selectCart],
    (cart) => cart.cartItems
)

export const selectCartToggleShow = createSelector(
    [selectCart],
    cart => cart.isShow
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
    
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
        0
    )
)