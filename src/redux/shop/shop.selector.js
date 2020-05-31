import {createSelector} from 'reselect'

const selectShop = state => state.shop; //NOTE: state->shop is the actual store name (refer to root reducer)

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)