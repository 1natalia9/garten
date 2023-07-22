const PRODUCTS_BYCATEGORY = 'PRODUCTS_BYCATEGORY';

export const loadProductsBycategory = payload => ({ type: PRODUCTS_BYCATEGORY, payload});

export const productsByCategoryReducer = (state = [], action) => {
    if(action.type === PRODUCTS_BYCATEGORY){
        state = action.payload
        return action.payload
    } else {
        return state
    }
}
