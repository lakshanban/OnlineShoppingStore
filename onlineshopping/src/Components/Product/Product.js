import React, {Component} from 'react';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import Tshirt from "../LoggeHome/tshirt.jpg";
import {Button, Paper} from "@material-ui/core";

class Product extends Component {

constructor(props) {
    super(props);
}



    render() {
        return (
            <div>

                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>

                <Paper elevation={3} className="Paper">

                    <h6>{this.props.product.name}</h6>

                    <img src={Tshirt} className="image"/>

                    <p>{this.props.product.description}</p>

                    <Button variant={"outlined"} color={"secondary"} >Buy Now</Button>

                </Paper>
                
            </div>
        );
    }
}

export default Product;
