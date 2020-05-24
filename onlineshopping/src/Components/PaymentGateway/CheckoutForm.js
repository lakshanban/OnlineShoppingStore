import {Component} from "react";
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
import DetailForm from "./DetailForm";

class CheckoutForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            purchase: ' '
        }
    }

    confirmPurchase(pid) {

        if(this.state.quan=="" || this.state.quan==0) {

            alert('please select an item to purchase')

        } else {

            console.log(pid)

            axios.post('http://localhost:8080/purchaseOrder',
                {"username":this.props.user,"pid":pid,"quan":this.state.quan})
                .then(res=>{

                alert('Purchase confirmed')

            });

        }
    }

    render() {
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        });

        return (
            <div>
                <ComplexNavigationNoDrawer
                    dispatch={this.props.dispatch}
                    userobject={this.props.userobject}
                    setpurchase={this.props.setpurchase}
                />

                <div className="container" style={{ display:"absolute"}}>
                    <Paper className="paper" style={{ display:"absolute"}}>
                        <h2>Confirm purchase</h2>
                        <div className="productDetils">

                            {/*<p>Name: {this.state.purchase.name}</p>*/}
                            {/*<p>Address Line 1: {this.state.purchase.address1}</p>*/}
                            {/*<p>Address Line 2: {this.state.purchase.address2}</p>*/}
                            {/*<p>City: {this.state.purchase.city}</p>*/}
                            {/*<p>Postal code: {this.state.purchase.postalCode}</p>*/}

                            {/*<p>Payment mode: verified </p>*/}

                            <p>Are you sure you want to confirm purchase?</p>

                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            type={"submit"}
                            style={{margin:"20px"}}
                            onClick={()=>{
                                this.props.dispatch('PURCHASED')
                                this.props.setpurchase('PURCHASE',this.state)
                            }}
                        >
                            Confirm
                        </Button>

                        <Button
                            style={{margin:"20px"}}
                            variant="contained"
                            color="secondary"
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
