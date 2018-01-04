import {REQUEST_FILTERED_ITEMS, ADD_NEW_ITEM_TO_CART} from '../constants/BeautyConstants';
const initialState = {
    user_checkout: [],
    filtered_items: [],
}
export const beautyReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FILTERED_ITEMS:
            return {...state, filtered_items:action.filtered_items};
        case ADD_NEW_ITEM_TO_CART:
            if(state.user_checkout.length === 4){
                return state ;
            }
            return {...state, user_checkout:[...state.user_checkout, action.item]};
        default:
            return state;
    }
}