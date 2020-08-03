import React from 'react';
import ReactDOM from 'react-dom';
import fire from "../config/fire";

class Home extends React.Component {




    render() {
        return (
            <React.Fragment>
                <h1>You are logged in ladies and gentlemen</h1>
                <button onClick = {() => fire.auth().signOut()}>Sign Out</button>
            </React.Fragment>
           
        )
    }



}

export default Home;