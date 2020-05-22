import React, {Component} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Container, Grid} from "@material-ui/core";
import WishListPost from "./WishListPost";
import axios from "axios";

class WishList extends Component {

    constructor(props) {
        super(props);

        this.state={
            products:[]
        }
    }



    filterCart(id) {

        this.setState({random:Math.random()})

    }

    render() {
        return (
            <div>
                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
                <Container maxWidth={"md"}>
                    <h3 style={{marginTop:'20px'}}><FavoriteIcon />  WishList</h3>

                    <Grid container spacing={1} style={{display:"flex",marginTop:'50px'}}>

                        <WishListPost user={this.props.user} dispatch={this.props.dispatch} setproduct={this.props.setproduct}>

                        </WishListPost>

                    </Grid>

                </Container>
            </div>
        );
    }
}

export default WishList;
