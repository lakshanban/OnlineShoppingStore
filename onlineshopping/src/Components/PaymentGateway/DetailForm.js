import {Component} from "react";
import React from 'react'
import PropTypes from 'prop-types';
import './DetailForm.css';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Button, Card, Paper, TextField} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Label} from "@material-ui/icons";
import axios from "axios";

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
    }

    getInitialState() {
        return {
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
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value,
            name: event.target.value,
            address1 : event.target.value,
            address2: event.target.value,
            city: event.target.value,
            postalCode: event.target.value,
            cash: false,
            cardNumber: event.target.value,
            CardOtp: '',
            CardDate: '',

            showing: true
        });
        this.props.newVal(event.target.value);
    }

    getData = (data) => {
        console.log(data)
    }
    render() {

        const {showing} = this.state;


        return(<div>

            <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>

            <div className="container">
                <Paper elevation={3} className="paper">
                <h2>Purchase details</h2>
                <Card>

                <form onSubmit={this.HandleSubmit}>

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
                        onClick={()=>{this.props.dispatch('CHECKOUT')}}
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
