import React, {Component} from 'react';
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


class Product extends Component {

constructor(props) {
    super(props);
}



    render() {
        return (
            <div>
                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
             <div className="container">
             <Paper elevation={3} className="paper" >
                 <Grid container spacing={1} style={{display:"flex", margin:5}}>
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
                                 />
                             </CardActions>
                             <br/>
                             <CardActions className="justify-content-center">
                                 <Button variant="contained" color="primary" size="small" startIcon={<AddShoppingCartIcon/>}>ADD TO CART</Button>
                                 <Button variant="contained" color="secondary" size="small" startIcon={<FavoriteIcon/>}>ADD TO FAVORITE</Button>
                                 <Button variant="contained" color="default" size="small" startIcon={<MonetizationOnIcon/>}>BUY</Button>
                             </CardActions>
                         </Card>
                     </Grid>
                 </Grid>
             </Paper>
             </div>
                
            </div>
        );
    }
}

export default Product;
