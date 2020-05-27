import React from "react";
import {createStructuredSelector} from "reselect";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {toggleShowCart, addItem} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { connect } from 'react-redux'
import './cart-icon.styles.scss'

const CartIcon = ({toggleShowCart, itemCount}) => (
    <div className='cart-icon' onClick={toggleShowCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

//NOTE: This state props the modified resusable selector that uses "MEMOIZE Caching" using createStructuredSelector
const mapStateToProps = createStructuredSelector({
        itemCount: selectCartItemsCount
    }
)


const mapDispatchToProps = dispatch=> ({
    toggleShowCart: () => dispatch(toggleShowCart()) //eslint-disable-line
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);





//NOTE: This state props is using the simple selector implemenation 
// const mapStateToProps = ( { cart: { cartItems }}) => { //NOTE: This state props reduce is always render in any event in the app, always giving new value
//     console.log('[ CartIcon : mapStateToProps] - cart: ', cartItems)
//     return {
//         itemCount: cartItems.reduce( //NOTE: Reduce result is a selector
//             (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//             0
//         )
//     }
// }

//NOTE: This state props the modified resusable selector that uses "MEMOIZE Caching"
// const mapStateToProps = state => {
//     console.log('[ CartIcon : mapStateToProps] - memoize selector state : ', state)
//     return ({
//         itemCount: selectCartItemsCount(state)
//     })
// };


//NOTE: This can be done like this too
// export default connect(null, {toggleShowCart})(CartIcon);