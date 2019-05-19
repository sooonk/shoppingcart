import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar';
import { connect } from 'react-redux';
import { addItem, fetchProducts } from './actions';


export const formatPrice = (price) => {
  return `$${(price * 0.01).toFixed(2)}`;
}


class App extends Component {

componentDidMount(){
  this.props.fetchProducts();
};
  render() {
    return (
      <div className="App">
        <TopBar />
        <h1>Shopping Cart</h1>
        {this.props.loading ? "Loading" : (
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
        )}
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  items: store.items,
  loading: store.loading,
})
const mapDispatchToProps = {
  addItem,
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
