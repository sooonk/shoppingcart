import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Cart from './Cart'
import * as serviceWorker from './serviceWorker';

const product1 = {
    name: 'Orange',
    price: 500,
    id: 1,
    image: 'https://media.gettyimages.com/photos/slice-of-orange-picture-id185311615?s=612x612',
};
const product2 = {
    name: 'Apple',
    price: 300,
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81xQBb5jRzL._SY355_.jpg'
}
const product3 = {
    name: 'Mango',
    price: 700,
    id: 3,
    image: 'https://i5.walmartimages.ca/images/Large/188/9_r/6000191271889_R.jpg',
}
const product4 = {
    name: 'Pineapple',
    price: 1000,
    id: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71%2BqAJehpkL._SY355_.jpg',
}
const product5 = {
    name: 'Lemon',
    price: 400,
    id: 5,
    image: 'https://cdn.shopify.com/s/files/1/2336/3219/products/shutterstock_77846398eureka2_x850.jpg?v=1554665666'
}

const items = [product1, product2, product3, product4, product5];

const initialState = {
    items,
    cart: {},
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
        default:
            break;
    }
    return state;
}
const store = createStore(reducer);

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
