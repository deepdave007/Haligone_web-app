import React from 'react';
import ReactDOM from 'react-dom';


import {Route, BrowserRouter} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Login from "./Components/Login";
import fire from "./config/fire";
import {AuthProvider} from "../src/config/Auth";
import PrivateRoute from "./config/PrivateRoute";


class App extends React.Component {

  constructor(props) {
    super(props)


    this.state = {
      user: {

      }
    }
  }


  componentDidMount() {
    this.authListener();
  }



  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }

      else {
        this.setState({user: null})
      }
    })
  }

  render() {


    

    return (


      
    <AuthProvider>
      <BrowserRouter>
        <PrivateRoute exact path = "/" component = {Home} />
        
        <Route path = "/register" component = {Register} />
        <Route path = "/login" component = {Login} />
        <Route path = "/welcome" component = {Welcome} />
        
      </BrowserRouter>
    </AuthProvider>
      
    )

  }
}

export default App;
