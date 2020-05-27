import React from 'react';
import './custom-buttom.styles.scss';

// NOTE: The children argument is like the inner html value of a elment (ex: <span>xxx</span>)
// NOTE: The otherProps is the auto descructure spread properties of a button props
const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button 
        className={
            `${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`
        } {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;