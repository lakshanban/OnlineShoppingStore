import {Component} from "react";
import React from 'react'
import './DetailForm.css';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Button, Card, Paper, TextField} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import ProductItem from "./ProductItem";

class DetailForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
                name: '',
                address1 : '',
                address2: '',
                city: '',
                postalCode: '',
                cash: false,
                cardNumber: '',
                CardOtp: '',
                CardDate: '',
                showing: true
            }

            this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleSubmit(e) {
        e.preventDefault();

        let data = {
            name: this.state.name,
            address1 : this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            postalCode: this.state.postalCode,
            cash: this.state.cash,
            cardNumber: this.state.cardNumber,
            CardOtp: this.state.CardOtp,
            CardDate: this.state.CardDate,
        };

        this.props.setpurchase(data);

    }

    render() {

        const {showing} = this.state;

        return(<div>

            <ComplexNavigationNoDrawer
                dispatch={this.props.dispatch}
                userobject={this.props.userobject}
                setpurchase={this.props.setpurchase}
            />

            <div className="container">
                <Paper elevation={3} className="paper">
                <h2>Purchase details</h2>

                    {/*<ProductItem/>*/}
                <Card>

                <form onSubmit={this.handleSubmit}>

                <TextField name={"name"}  required id="standard-required" label="Enter Name" /><br/>
                <TextField name={"address1"} required id="standard-required" label="Enter Address 1" /><br/>
                <TextField name={"address2"} required id="standard-required" label="Enter Address 2" /><br/>
                <TextField name={"city"} required id="standard-required" label="City" /><br/>
                <TextField name={"postalCode"} required id="standard-required" label="Postal code" /><br/><br/>

                    <p>Press below icon if you wish to pay cash on delivery</p>

                    <br/>
                    <FormControlLabel
                            name={"cash"}
                            value="Cash"
                            color="secondary"
                            label="Cash"
                            control={<Radio/>}
                          onClick={() => this.setState({showing: !showing})}
                    >
                        Cash payment
                    </FormControlLabel>

                    {showing ?
                    <div className="cardDetails">
                        <TextField name={"cardNumber"} required id="standard-required" label="Card number"/><br/>
                        <TextField name={"CardOtp"} required id="standard-required" label="OTP"/><br/>
                        <TextField name={"CardDate"} required id="standard-required" label="Expiry Date"/>
                    </div> : null
                    }<br/>

                </form>

                    <Button
                        variant="contained"
                        color="primary"
                        type={"submit"}
                        onClick={()=>{this.props.dispatch('CHECKOUT')
                        this.props.setpurchse('PURCHASE',this.state)}}
                    >
                        Confirm
                    </Button>

                <Button variant="contained"
                        color="secondary"
                        onClick={()=>{this.props.dispatch('CART')}}
                >
                    Cancel
                </Button>

                </Card>

                </Paper>

            </div>

        </div>);

    }
}


export default DetailForm;
