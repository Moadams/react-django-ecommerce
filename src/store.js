import {applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import {configureStore} from '@reduxjs/toolkit'
import {productListReducer} from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
});

const initialState = {}
const middleware = [thunk]


const store = configureStore(
    {reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store