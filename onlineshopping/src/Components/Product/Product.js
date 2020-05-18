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
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {Row} from "react-bootstrap";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class Product extends Component {

constructor(props) {
    super(props);
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
                                     <Rating name="read-only" value={2} readOnly />
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

                     <div className="container"><br/>

                        <h5>Rate our product</h5>
                         <AddRatings/>
                         <form>
                            <TextField name={"comment"}  variant="outlined" margin="dense" label="Your Comment" id="btnid" type="text" fullWidth/>
                            <Button variant="contained" color="primary">SEND</Button>
                         </form>
                         <CommentList/>
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

function CommentList() {

    return (
        <List >
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );

}
