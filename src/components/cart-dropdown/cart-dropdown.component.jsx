import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleShowCart} from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss'


const CartDropdown = ({cartItems, history, dispatch}) => ( //NOTE: history is from the withRouter props, dispatch is part of the component context
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    (
                        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )
            }
        </div>
        {/*TODO: Add logic to hide this button if cart is empty (with styles and shit) */}
        <CustomButton onClick={
                        () => {
                            history.push('/checkout')
                            dispatch(toggleShowCart())
                        }
                    }
                  disabled={cartItems.length === 0}>PROCEED TO CHECKOUT
        </CustomButton>
    </div>
)

// NOTE: Old way of setting the cartItems state
// const mapStateToProps = ( { cart: { cartItems } } ) => ({
//     cartItems
// })

//NOTE: Using memoization with selectors to set the cart itmes state
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); //NOTE: withRouter takes a component in which connect returns one also