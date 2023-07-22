const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const FILTER_PRODUCTS_BY_PRICE = 'FILTER_PRODUCTS_BY_PRICE';
const GET_DISCOUNT_PRODUCTS = 'GET_DISCOUNT_PRODUCTS';

export const loadAction = (payload) => ({type: LOAD_PRODUCTS, payload});
export const addAction = (payload) => ({type: ADD_PRODUCTS, payload});
export const sortProductsAction = (payload) => ({type: SORT_PRODUCTS, payload});
export const filterProductsByPriceAction = payload => ({type: FILTER_PRODUCTS_BY_PRICE, payload});
export const getDiscountProductsAction = payload => ({type: GET_DISCOUNT_PRODUCTS, payload});

export const productsReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload
    } else if(action.type === ADD_PRODUCTS) {
        return [...state, action.payload]
    } else if(action.type === SORT_PRODUCTS){
        if(action.payload === 'title'){
            state.sort((a, b) => a[action.payload].
            localeCompare(b[action.payload]))
        }else if(action.payload === 'price_asc'){
            state.sort((a, b) => a.price - b.price)
        }else if (action.payload === 'price_desc'){
            state.sort((a, b) => b.price - a.price)
        }  
        return [...state]  
    } else if(action.type === FILTER_PRODUCTS_BY_PRICE){
      const { min_value, max_value } = action.payload;
      return state.map(el => {
        if(el.price >= min_value && el.price <= max_value){
            el.show_item = true
        } else {
            el.show_item = false
        }
        return el
      })
    } else if(action.type === GET_DISCOUNT_PRODUCTS) {
        if(action.payload){
          return state.map(el => {
              if(el.discont_price !== null){
                  el.show_item = true
              } else {
                  el.show_item = false
              }
              return el
          }) 
             }else {
              return state.map(el => {
               el.show_item = true;
               return el
              })
          }
    } else {
    return state
 }
}


  