import React, {Component, useEffect, useState} from 'react';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import Tshirt from "../LoggeHome/tshirt.jpg";
import {Button, Card, Paper} from "@material-ui/core";
import './Product.css'
import ImageShow from "./ImageShow";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import  axios from 'axios'
import CommentList from "./CommentList";



class Product extends Component {

constructor(props) {
    super(props);
    this.state={
        rating:0,
        quan:0
    }
}


addcomment(e){

    e.preventDefault();

    const comment={
        "productid":this.props.product.id,
        "username":this.props.user,
        "comment":e.target.comment.value
    }

    console.log(comment)


}

componentDidMount() {

    axios.post('http://localhost:8080/getrating',{"pid":this.props.product.id}).then(res=>{

        this.setState({
            rating:res.data
        })

    })
}


addtocart(pid){

    if(this.state.quan=="" || this.state.quan==0){

        alert('please select the quantity')
    }else {

        console.log(pid)

        axios.post('http://localhost:8080/addtocart', {"username":this.props.user,"pid":pid,"quan":this.state.quan}).then(res=>{

            alert('Added to cart')

        })

    }
}

addtowishlist(pid){

    axios.post('http://localhost:8080/addtowishlist',{"username":this.props.user,"pid":pid}).then(res=>{
        alert('Added to wish List')
    })

}

onChangeHandle(e){

    this.setState({quan:e.target.value})

}


    render() {
        return (
            <div>
                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
             <div className="container">
             <Paper elevation={3} className="paper">
                 <Grid container spacing={1} style={{display:"flex", margin:5, overflowY:'scroll', height:500}} >
                     <Grid item xs={6} container spacing={1}>
                         <ImageShow product={this.props.product}/>
                     </Grid>
                     <Grid item xs={6} container spacing={1}>
                         <Card >
                             <CardContent>
                                 <Typography color="textSecondary" gutterBottom variant="h4" component="h2">
                                     <b>{this.props.product.pname}</b>
                                 </Typography>
                                 <Typography color="textSecondary" variant="h6" component="h2">
                                     LKR {this.props.product.pprice}
                                 </Typography><br/>
                                 <Typography color="textSecondary" variant="h6" component="h2">
                                     {this.props.product.pdescription}
                                 </Typography><br/>
                                 <Typography>
                                     <Rating name="read-only" value={this.state.rating} readOnly />
                                 </Typography><br/>
                                 <Typography color="textSecondary" >
                                     Availability: <strong>in stock</strong>
                                 </Typography>
                             </CardContent>

                             <CardActions className="justify-content-center">
                                 <label>Sizes:</label>
                                 <ButtonGroup size="small" aria-label="small outlined button group">
                                     <Button>S</Button>
                                     <Button>M</Button>
                                     <Button>L</Button>
                                 </ButtonGroup>
                             </CardActions>
                             <CardActions className="justify-content-center">
                                 <label>Quantity:</label>
                                 <TextField style={{width:50}} id="standard-number" type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                            onChange={(event)=>{this.onChangeHandle(event)}}
                                 />
                             </CardActions>
                             <br/>
                             <CardActions className="justify-content-center">
                                 <Button variant="contained" color="primary" size="small" onClick={()=>{this.addtocart(this.props.product.id)}} startIcon={<AddShoppingCartIcon/>}>ADD TO CART</Button>
                                 <Button variant="contained" color="secondary" size="small" onClick={()=>{this.addtowishlist(this.props.product.id)}} startIcon={<FavoriteIcon/>}>ADD TO FAVORITE</Button>
                                 <Button variant="contained" color="default" size="small" startIcon={<MonetizationOnIcon/>}>BUY</Button>
                             </CardActions>
                         </Card>
                     </Grid>

                     <div className="container"><br/>

                        <h5>Rate our product</h5>
                         <AddRatings/>
                         <form onSubmit={this.addcomment}>
                            <TextField name={"comment"}  variant="outlined" margin="dense" label="Your Comment" id="btnid" type="text" fullWidth/>
                            <Button variant="contained" color="primary" type={"submit"}>SEND</Button>
                         </form>
                         <CommentList product={this.props.product}/>
                     </div>

                 </Grid>
             </Paper>
             </div> 
                
            </div>
        );
    }
}

export default Product;

function AddRatings() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(2);

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    name="read-only"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>
        </div>
    );
}

