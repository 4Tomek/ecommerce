import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productListReducers'
import { cartReducer } from './reducers/cartReducers'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


export const initialState = {
    cart:{ cartItems: cartItemsFromStorage },
    userLogin:{userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = configureStore({reducer: reducer, preloadedState: initialState, middleware: middleware,})

export default store

