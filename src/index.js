import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import Cart from './Cart'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { PRODUCT_REQUEST, PRODUCT_REQUEST_SUCCESS, REMOVE_ITEM } from './actions';

const items = [];

const initialState = {
    items,
    cart: {},
    loading: true,
}


const ADD_ITEM = 'ADD_ITEM';
//action creator
export const addItem = (id) => ({
    type: ADD_ITEM,
    payload: id
})
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const id = action.payload;
            const prevAmount = state.cart[id] || 0;
            return {...state, cart: {
                ...state.cart, 
                [id]: prevAmount + 1,
            } }
        case REMOVE_ITEM:{
            const id = action.payload;
            const prevAmount = state.cart[id] || 0;
            return {...state, cart: {
                ...state.cart, 
                [id]: prevAmount - 1,
            } }}

        case PRODUCT_REQUEST:
            return {...state, loading:true}
            
        case PRODUCT_REQUEST_SUCCESS:
            return {
                ...state, 
                loading:false,
                items: action.payload,
            }
        default:
            break;
    }
    return state;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/cart' component={Cart} />
            </div>

        </BrowserRouter>
    </Provider>,

    document.getElementById('root'));
serviceWorker.unregister();
