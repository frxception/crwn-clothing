import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleShowCart} from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss'


const CheckoutItem = ({ cartItem : {name, imageUrl, price, quantity}}) => ( //NOTE: history is from the withRouter props, dispatch is part of the component context
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>

        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <span className='remove-button'>&#10005;</span>
    </div>
)


//NOTE: Using memoization with selectors to set the cart itmes state
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default CheckoutItem
// export default connect(mapStateToProps)(CheckoutItem); //NOTE: withRouter takes a component in which connect returns one also