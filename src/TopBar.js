import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { selectAmount } from './selectors';
import { connect } from 'react-redux';


class TopBar extends Component {
    render() {
        return <div className='topBar'>

                    <div className='itemImg'>Shop</div>
                    <div className='itemAmount'><Link to='cart' className='link'>Cart ({this.props.productAmount})</Link></div>
                    
                </div>
        
    }
  }
const mapStateToProps = state => ({
  productAmount: selectAmount(state),

})
export default connect (mapStateToProps)(TopBar);  