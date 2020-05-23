import {Component} from "react";
import PropTypes from 'prop-types';
import React from 'react'
import {Button, Card, Paper} from "@material-ui/core";
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class CheckoutForm extends Component {

    constructor(props) {
        super(props);
    }

    confirmPurchase(pid) {

        if(this.state.quan=="" || this.state.quan==0) {

            alert('please select an item to purchase')

        } else {

            console.log(pid)

            axios.post('http://localhost:8080/purchaseOrder', {"username":this.props.user,"pid":pid,"quan":this.state.quan}).then(res=>{

                alert('Purchase confirmed')

            })

        }
    }



    render() {
        const classes =makeStyles({
            table: {
                minWidth: 650,
            },
        });

        return (
            <div>
                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>

                <div className="container">
                    <Paper elevation={3} className="paper">
                        <h2>Confirm purchase</h2>
                        <div className="productDetils">
                            {/*<ProductItem/>*/}
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Address Line 1</TableCell>
                                            <TableCell align="right">Address Line 2</TableCell>
                                            <TableCell align="right">City</TableCell>
                                            <TableCell align="right">Postal Card</TableCell>
                                            <TableCell align="right">Payment method</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/*{rows.map((row) => (*/}
                                            <TableRow key={this.state.name}>
                                                <TableCell component="th" scope="row">
                                                    {this.state.name}
                                                </TableCell>
                                                <TableCell align="right">{this.state.address1}</TableCell>
                                                <TableCell align="right">{this.state.address2}</TableCell>
                                                <TableCell align="right">{this.state.city}</TableCell>
                                                <TableCell align="right">{this.state.postalCode}</TableCell>
                                            </TableRow>
                                        {/*))}*/}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={()=>{this.confirmPurchase(this.props.product.id)}}
                        >
                            Confirm
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={()=>{this.props.dispatch('PAY')}}
                        >
                            Back
                        </Button>
                        <Card>
                        </Card>
                    </Paper>
                </div>
                </div>
        );
    }
}


export default CheckoutForm;
