import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar';
import { connect } from 'react-redux';
import { addItem } from './actions';

export const formatPrice = (price) => {
  return `$${(price * 0.01).toFixed(2)}`;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <h1>Shopping Cart</h1>
        <div className='itemList'>
          <ul>
            {this.props.items.map(product =>
              <li key={product.id}>
                <p>{product.name}</p>
                <p><img src={product.image}></img></p>
                <p>{formatPrice(product.price)}</p>
                <button onClick={() => {
                  this.props.addItem(product.id)
                }}>
                  Add to cart
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  items: store.items
})
const mapDispatchToProps = {
  addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
