import React from 'react';
import {Link} from "react-router-dom";

function showRegisterScreen(props) {
    
}


function Welcome() {
    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body text-center" id="cardModal">
                    <h2><i class="fas "></i></h2>
                    <p>Create an account or login</p>
                    <Link to = "/register">
                    <button className = "btn btn-primary btn-block mb-2" text = "register" id = "btnregister">Register</button>
                    </Link>
                    <Link to = "/login">
                    <button className = "btn btn-primary btn-block mb-2" id = "btnregister">Login</button>
                    </Link>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Welcome;