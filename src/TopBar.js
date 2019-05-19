import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class TopBar extends Component {
    render() {
        return <div className='topBar'>

                    <div className='itemImg'>Shop</div>
                    <div className='itemAmount'><Link to='cart'>Cart</Link></div>
                    
                </div>
        
    }
  }

export default TopBar;  