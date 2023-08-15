import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productListReducers'
import { cartReducer } from './reducers/cartReducers'
// import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []



export const initialState = {
    cart:{ cartItems: cartItemsFromStorage }
}

const middleware = [thunk]

const store = configureStore({reducer: reducer, preloadedState: initialState, middleware: middleware,})

export default store

