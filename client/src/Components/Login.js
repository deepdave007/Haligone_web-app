import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import fire from "../config/fire";
import { AuthContext } from "../config/Auth";
import {Link} from "react-router-dom";




    
const Login = ({history}) => {


    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await fire
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/" />;
      }
    
    return (
        <div className = "row mt-5">
            <div className = "col-md-6 m-auto">
                <div className = "card card-body">
                    <h1 className = "text-center mb-3">
                        <i class = "fast"></i>
                        Login
                    </h1>

                    <form onSubmit = {handleLogin}> 
                        <div className = "form-group">
                            <label>
                                Email:
                                <input
                                    type = "email"
                                    id = "email"
                                    name = "email"
                                    className = "form-control"
                                    placeholder = "Enter email"
                                    
                                 />
                            </label>
                        </div>
                        <div className = "form-group">
                            <label>
                                Password:
                                <input
                                    type = "password"
                                    id = "password"
                                    name = "password"
                                    className = "form-control"
                                    placeholder = "Enter password"
                                    
                                 />
                            </label>

                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <p class="lead mt-4 text-center" id="accountlink">no account?
                        <Link to = "/register">
                            <button id = "loginlink">Register</button>
                        </Link>                
                    </p>
                </div>
            </div>
        </div>
    )

}
 

export default withRouter(Login);