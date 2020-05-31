import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {clearItemFromCart, removeItem, addItem} from "../../redux/cart/cart.actions";
import {selectCartItems} from '../../redux/cart/cart.selectors'

import './checkout-item.styles.scss'


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <input className='adjust' type='button' value='-' onClick={()=>removeItem(cartItem)} />
                <span className='value'>{quantity}</span>
                <input className='adjust' type='button' value='+' onClick={()=>addItem(cartItem)} />
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);