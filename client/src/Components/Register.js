import React, { useCallback } from "react";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import fire from "../config/fire";




const Register = ({history}) => {

    const handleRegister = useCallback(async event => {
        event.preventDefault();
        
        const { name, email, password} = event.target.elements;
        console.log(password.value);
        
        try {
          await fire
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
    }, [history]);
   
    
    return (
    <React.Fragment>
         <div class="row mt-5">
            <div class="col-md-6 m-auto">
            <div class="card card-body" id="cardModal1">
                <h1 class="text-center mb-3">register</h1>
                
                <form onSubmit = {handleRegister} method="POST">
                <div class="form-group">
                    <label for="name">name</label>
                    <input
                    type="name"
                    id="name"
                    name="name"
                    class="form-control"
                    placeholder="enter your full name"
                    
                    />
                </div>
                <div class="form-group">
                    <label for="name">email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="enter email"
                    
                    />
                </div>
                <div class="form-group">
                <label for="name">password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="create password"
                    
                    />
                </div>
                
               
                <button type="submit" class="btn btn-primary btn-block">
                    Register
                </button>
                </form>
                <p class="lead mt-4 text-center" id="accountlink">Have An Account? 
                    <Link to = "/login">
                        <button id = "loginlink">Login</button>
                    
                    </Link>
                </p>
            </div>
            </div>
        </div>

    </React.Fragment>

    )

    
   
}

export default withRouter(Register);