import React, { Component } from 'react';
import Navbar from '../BussinesLogistic/Navbar/Navbar';
import Header from '../BussinesLogistic/Navbar/Navbar';
import Cart from '../Components/Cart/Cart';
//class CartView extends Component {
   // render() 
   const CartView = () =>
   
   {
        return (
            <React.Fragment>
                <Navbar/>
                <br/><br/><br/><br/>
                <Cart/>
            </React.Fragment>
        )
    }

export default CartView;