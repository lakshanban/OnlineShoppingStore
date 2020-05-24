import React, {Component} from 'react';
import {Button, Container, Grid} from "@material-ui/core";
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import Post from "../LoggeHome/Post";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from "axios"
import CartPost from "./CartPost";

class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            random: '01001010101',
            total:0
        }


    }

    componentDidMount(): void {

        axios.post('http://localhost:8080/getcart', {"username": this.props.user}).then(res => {

            this.setState({products: res.data})

        })


    }


 filterCart(id) {

     this.setState({random:Math.random()})

 }
render() {


    return (


            <div>



                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
                <Container maxWidth={"md"}>
                    <h3 style={{marginTop:'20px'}}><ShoppingCartIcon />Cart</h3>
                    <Button variant={"outlined"} color={"secondary"} onClick={()=>this.props.dispatch("PURCHASED")}>View purchased</Button>

                    <Grid container spacing={1} style={{display:"flex",marginTop:'50px'}}>



                                 <Grid key={this.state.random} container item xs={4} spacing={4} style={{margin:'00px'}} className="gridItem">

                                    <CartPost addtotal={this.props.addtotal} Total={this.props.Total} dispatch={this.props.dispatch} setproduct={this.props.setproduct} user={this.props.user} forceR={this.filterCart.bind(this)}/>

                                </Grid>




                        }

                    </Grid>

                </Container>



            </div>
        );
    }
}

export default ShoppingCart;
