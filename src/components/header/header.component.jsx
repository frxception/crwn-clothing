import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { auth } from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartToggleShow } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

// NOTE: We use function because we dont care about the state
const Header = ({currentUser, isShow}) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/contact">
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon/>
        </div>
        {
            isShow? null : <CartDropdown/>
        }
    </div>
)

// const mapStateToProps = ({user: {currentUser}, cart: {isShow}}) => ({ //NOTE: Desctructure ALL redux state store
//     currentUser,
//     isShow
// })

//NOTE: Memoize selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, //NOTE: No need to call selectCurrentUser(state) because of createStructuredSelector
    isShow: selectCartToggleShow //NOTE: No need to call selectCartToggleShow(state) because of createStructuredSelector
})

//NOTE: redux connect is a higher component
export default connect(mapStateToProps)(Header);