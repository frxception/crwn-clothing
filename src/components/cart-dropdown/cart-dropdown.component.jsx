import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import  { selectCartItems } from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss'


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        
        <div className='cart-items'>
            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
                    )
                )
            }
        </div>
        <CustomButton>PROCEED TO CHECKOUT</CustomButton>
    </div>
)

// NOTE: Old way of setting the cartItems state
// const mapStateToProps = ( { cart: { cartItems } } ) => ({
//     cartItems
// })

//NOTE: Using memoization with selectors to set the cart itmes state
const mapStateToProps = state => {
    console.log('[ CartDropdown : mapStateToProps] - memoize selector state : ', state)
    return ({
        cartItems: selectCartItems(state)
    })
}

export default connect(mapStateToProps) (CartDropdown);