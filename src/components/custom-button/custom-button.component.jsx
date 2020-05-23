import React from 'react';
import './custom-buttom.styles.scss';

// NOTE: The children argument is like the inner html value of a elment (ex: <span>xxx</span>)
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;