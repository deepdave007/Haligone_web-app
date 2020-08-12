import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import data from "../Data";
import Card from "./Card";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles({
    GridContainer: {
        paddingLeft:"30px",
        paddingRight: "30px"
    }
})




function Home(props) {

    const classes = useStyles();        
        return (
           

            <Grid container spacing = {4} className = {classes.GridContainer}  justify = "space-between">
                {data.products.map(product => 
                    <Grid item xs = {12} sm = {6} md = {4} key = {product._id}>
                        <Card product = {product} />
                    </Grid>
                    
                
                )}
            </Grid>

            
        )
    }





export default Home;