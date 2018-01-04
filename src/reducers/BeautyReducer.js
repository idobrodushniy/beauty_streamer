import {REQUEST_FILTERED_ITEMS} from '../constants/BeautyConstants';
const initialState = {
    user_checkout: [],
    filtered_items: [],
}
export const beautyReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FILTERED_ITEMS:
            return {...state, filtered_items: [...state.filtered_items, action.filtered_items]};
        default:
            return state;
    }
}