import React from 'react';
import './custom-buttom.styles.scss';

// NOTE: The children argument is like the inner html value of a elment (ex: <span>xxx</span>)
const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;