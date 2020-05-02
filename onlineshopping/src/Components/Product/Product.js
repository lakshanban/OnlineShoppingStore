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


class Product extends Component {

constructor(props) {
    super(props);
}



    render() {
        return (
            <div>

                {/*<ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>*/}
             <Paper elevation={3} className="paper">
                 <Grid>
                     <Grid item xs={4}>
                         <ImageShow product={this.props.product}/>
                     </Grid>
                     <Grid item xs={8}>
                         <Card>
                             <CardContent>
                                 <Typography color="textSecondary" gutterBottom>
                                     Word of the Day
                                 </Typography>
                                 <Typography color="textSecondary">
                                     adjective
                                 </Typography>
                             </CardContent>
                             <CardActions>
                                 <Button size="small">Learn More</Button>
                             </CardActions>
                         </Card>
                     </Grid>
                 </Grid>
             </Paper>
                
            </div>
        );
    }
}

export default Product;
