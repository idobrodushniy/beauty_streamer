import {REQUEST_FILTERED_ITEMS, ADD_NEW_ITEM_TO_CART} from '../constants/BeautyConstants';

export const requestFilteredItems = (client, keyword) => async (dispatch) => {
    try {
        let result = await client.itemSearch({
            keywords:keyword,
            responseGroup: 'ItemAttributes,Offers,Images'
        });
        return dispatch({type: REQUEST_FILTERED_ITEMS, filtered_items: result.slice(1,5)})
    } catch (error) {
        console.error('The reason of fail request:', error);
    }
}

export const addNewItemToCart = (item) => {
    return ({type:ADD_NEW_ITEM_TO_CART, item });
}