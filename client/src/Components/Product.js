import React from "react";
import ReactDOM from 'react-dom';
import  data  from "../Data";


function Product(props) {
    

    const product = data.products.find(product => product._id === props.match.params.id);
    
    console.log(product.name);
    
    
    return (
        
        
        <div className = "details">
            <div className = "details-image">
                <img src = {product.image}  alt = "product" />
            </div>
            <div className = "details-info">
                
                    <ul>
                        <li>
                            
                            {product.name}
                        </li>
                        <li>
                            {product.rating}
                        </li>
                        <li>
                            {product.description}
                        </li>
                        <li>
                            <b>{product.price}</b>
                        </li>
                    </ul>
                      

                    <div className = "details-action">
                        <ul>
                            <li>
                                Price: {product.price}
                            </li>

                           

                            <li>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </li>

                            <li>
                                <button>Add to Cart</button>
                            </li>
                        </ul>
                    </div>
            </div>

        </div>
        
    )
    
    
}

export default Product;