import React, {Component} from 'react';
import {Container, Grid} from "@material-ui/core";
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import Post from "../LoggeHome/Post";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from "axios"
import CartPost from "./CartPost";

class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        this.state={
            products:[]
        }

    }

    componentDidMount(): void {

        axios.post('http://localhost:8080/getcart',{"username":this.props.user}).then(res=>{

            this.setState({products:res.data})


        })

    }


    render() {

        return (


            <div>



                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
                <Container maxWidth={"md"}>
                    <h3 style={{marginTop:'20px'}}><ShoppingCartIcon />Cart</h3>

                    <Grid container spacing={1} style={{display:"flex",marginTop:'50px'}}>

                        {
                            this.state.products.map(product=>{

                                return <Grid container item xs={4} spacing={4} style={{margin:'00px'}} className="gridItem">

                                    <CartPost product={product} dispatch={this.props.dispatch} setproduct={this.props.setproduct}/>

                                </Grid>



                            })



                        }

                    </Grid>

                </Container>



            </div>
        );
    }
}

export default ShoppingCart;
