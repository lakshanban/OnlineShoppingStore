import React, {Component} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Container, Grid} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Post from "../LoggeHome/Post";
import axios from "axios";

class WishList extends Component {

    constructor(props) {
        super(props);

        this.state={
            products:[]
        }
    }

    componentDidMount(): void {

        axios.post('http://localhost:8080/getcart',{"username":this.props.user.username}).then(res=>{

            this.setState({products:res.data})

        })

    }


    render() {
        return (
            <div>
                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
                <Container maxWidth={"md"}>
                    <h3 style={{marginTop:'20px'}}><FavoriteIcon />  WishList</h3>

                    <Grid container spacing={1} style={{display:"flex",marginTop:'50px'}}>

                        {
                            this.state.products.map(product=>{

                                return <Grid container item xs={4} spacing={4} style={{margin:'00px'}} className="gridItem">

                                    <Post product={product} dispatch={this.props.dispatch} setproduct={this.props.setproduct}/>

                                </Grid>



                            })



                        }

                    </Grid>

                </Container>
            </div>
        );
    }
}

export default WishList;
