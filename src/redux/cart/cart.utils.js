export const addItemToCart = ( cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    
    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } //NOTE: Increment the property quantity in that item if it already exist
            : cartItem
        )
    }
    
    return [...cartItems, { ...cartItemToAdd, quantity: 1}] //NOTE: If item in cart is new or for the time adding it then return quantity 1
}

export const removeItemFromCart = ( cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(c => c.id === cartItemToRemove.id)
    if(existingCartItem.quantity === 1){
        return cartItems.filter(c => c.id !== cartItemToRemove.id)
    }
    //NOTE: If the cart item is the last one, this will modify the cart items quantity or remove the item altogether
    return cartItems.map(c => c.id === cartItemToRemove.id ? {...c, quantity: c.quantity - 1} : c)
}