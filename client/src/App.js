import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Product from "./Components/Product";
import Slider from "./Components/Slider";
import UserProfile from "./Components/UserProfile";


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
            <Route path = "/product/:id" component = {Product} />
            <Route path = "/profile" component = {UserProfile} />
            <Route exact path = "/"  component = {Home} />
            <Route path = "/slider" component = {Slider} />
            
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
