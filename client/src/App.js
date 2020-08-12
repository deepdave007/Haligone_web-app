import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import RegisterScreen from "./Screens/RegisterScreen";

import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import CartScreen from "./Screens/CartScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import OrderScreen from "./Screens/OrderScreen";
import OrdersScreen from "./Screens/OrdersScreen";
import SigninScreen from "./Screens/SigninScreen";


import ProductsScreen from "./Screens/ProductsScreen";


function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <a href="index.html">haligone</a>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a className="signupbutton" href="signin.html">Sign in</a>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            
          </div>
        </main>
        <footer className="footer">
          All rights reserved to Haligone Inc, 2020.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
