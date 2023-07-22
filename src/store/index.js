import {applyMiddleware, combineReducers, createStore} from "redux";
import { categoryReducer } from "./reducer/categoryReducer";
import thunk from "redux-thunk";
import { productsReducer } from "./reducer/productsReducer";
import { basketReducer } from "./reducer/basketReducer";
import { productsByCategoryReducer } from "./reducer/productsByCategory";

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    basket: basketReducer,
    productsByCategory: productsByCategoryReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));