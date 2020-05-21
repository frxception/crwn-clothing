import React from "react";
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

const backgroundStyle = (imageUrl) => {
    return {backgroundImage: `url(${imageUrl})`}
}

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={ `${size} menu-item` } 
         onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={ backgroundStyle(imageUrl) } />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOW NOW</span>
        </div>
        
    </div>
);

export default withRouter(MenuItem);