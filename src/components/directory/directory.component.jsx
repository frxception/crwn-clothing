import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

const Directory = ({sections}) => {
    return (
        <div className='directory-menu'>
            {
                // this.state.sections.map(({title, imageUrl, id, size}) => (
                sections.map(({id, ...otherSectionProps}) => ( //NOTE: is this otherSectionProps ok? no declaration? power of destructuring???
                    // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}
//NOTE: Using selector 'selectDirectorySections' we are using memoize to cache the sections
export default connect(createStructuredSelector({
        sections: selectDirectorySections
    })
)(Directory);

