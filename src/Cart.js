import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TopBar from './TopBar';
import { formatPrice } from './App';



const Product = (product) => (

    <div className='cart'>
        <h3>{product.name}</h3>
        <p>{product.amount}</p>
        <p>{formatPrice(product.price)}</p>


    </div>

)

class Cart extends Component {
    render() {
        return (
            <div className="App">
                <TopBar />
                <h1>My cart:</h1>
                <div>
                    {this.props.cart.map(Product)}
                    <p>Amount: {this.props.productAmount}</p>
                    <p>Sum: {formatPrice(this.props.priceSum)}</p>

                </div>

                <p>
                    <Link to='/'>Go back to the store</Link>
                </p>
            </div>
        );

    }
}
const getCartProducts = state => Object.keys(state.cart).map(id => ({
    ...state.items.find(item => item.id === +id),
    amount: state.cart[id],
}));
const mapStateToProps = state => ({
    cart: getCartProducts(state),
    productAmount: Object.values(state.cart)
        .reduce(function (previousValue, currentValue) {

            return previousValue + currentValue;
        }, 0),
    priceSum: Object.keys(state.cart).map(id => {
        const amount = state.cart[id];
        const price = state.items.find(product => {
            return product.id === +id
        }).price;
        return (amount * price);
    }).reduce((previousValue, currentValue) => previousValue + currentValue, 0)

});



export default connect(mapStateToProps)(Cart); 