import React, {Component} from 'react';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import Tshirt from "../LoggeHome/tshirt.jpg";
import {Button, Paper} from "@material-ui/core";
import './Product.css'
import ImageShow from "./ImageShow";

class Product extends Component {

constructor(props) {
    super(props);
}



    render() {
        return (
            <div>

                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>

                <Paper elevation={3} className="paper">

                    <ImageShow product={this.props.product}/>


                </Paper>
                
            </div>
        );
    }
}

export default Product;
