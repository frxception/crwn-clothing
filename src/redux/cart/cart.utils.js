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