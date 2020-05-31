import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import './collections-overview.styles.scss'


const CollectionsOverview = ({collections}) => ( //NOTE: history is from the withRouter props, dispatch is part of the component context
    <div className='collections-overview'>
        {
            collections.map(
                ({id, ...otherCollectionProps}) => ( //NOTE: the magic spread destructure 
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                )
            )
        }
    </div>
)

export default connect(createStructuredSelector({
        collections: selectShopCollections
    })
)(CollectionsOverview);
