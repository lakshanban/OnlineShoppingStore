import React, {Component} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Container, Grid} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Post from "../LoggeHome/Post";

class WishList extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        const products=[{name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"},{name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"},{name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"},{name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"},{name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"}]


        return (
            <div>
                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
                <Container maxWidth={"md"}>
                    <h3 style={{marginTop:'20px'}}><FavoriteIcon />  WishList</h3>

                    <Grid container spacing={1} style={{display:"flex",marginTop:'50px'}}>

                        {
                            products.map(product=>{

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
