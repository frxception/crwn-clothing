import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import toggleShowCart from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import './cart-icon.styles.scss'


const CartIcon = ({toggleShowCart}) => (
    <div className='cart-icon' onClick={toggleShowCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch=> ({
    toggleShowCart: () => dispatch(toggleShowCart()) //eslint-disable-line
})

export default connect(null, mapDispatchToProps)(CartIcon);