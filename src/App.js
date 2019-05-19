import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar';
import { connect } from 'react-redux';
import { addItem, fetchProducts } from './actions';


export const formatPrice = (price) => {
  return `$${(price * 0.01).toFixed(2)}`;
}


class App extends Component {
  state = {
    value: '',
  }
  componentDidMount() {
    this.props.fetchProducts();
  };
  render() {
    return (
      <div className="App">
        <TopBar />
        <h1>Shopping Cart</h1>
        <div>
          <input type='text' placeholder='Search' onChange={(event) => {
              this.setState({
                value: event.target.value
              })
            }} />
        </div>
        {this.props.loading ? "Loading" : (//w przypadku ładowania wyświetla się loading, po załadowaniu wyświetlanie listy
          <div className='itemList'>
            <ul>
              {this.props.items
              .filter((item)=>{
                return item.name.toLowerCase().search(this.state.value) !== -1
              })
              .map(product =>
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
