import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productListReducers'
// import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

export const initialState = {}

const middleware = [thunk]

const store = configureStore({reducer: reducer, preloadedState: initialState, middleware: middleware,})

export default store

