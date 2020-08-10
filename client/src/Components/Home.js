import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import  data  from "../Data";

class Home extends React.Component {




    render() {
        return (
            /*
            <React.Fragment>
                <h1>You are logged in ladies and gentlemen</h1>
                <button onClick = {() => fire.auth().signOut()}>Sign Out</button>
            </React.Fragment>

            */

           <ul className="products">
               {data.products.map(product =>  
                    <li>
                        <div className="product">
                        <img className="product-image" src= {product.image} alt="product" />
                        <div className="product-name">
                            <Link to = {"/product/" + product._id} href="product.html">{product.name}</Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-rating">{product.rating}  ({product.reviews})</div>
                        <div className = "product-actions">
                            <button>Add</button>
                            <button>Details</button>
                        </div>
                        </div>
                    </li>
               )}           
         </ul>
           
        )
    }



}

export default Home;