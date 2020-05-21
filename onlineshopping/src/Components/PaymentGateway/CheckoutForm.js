import {Component} from "react";
import PropTypes from 'prop-types';
import React from 'react'
import {Button, Card, TextField} from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Radio} from "@material-ui/icons";

class CheckoutForm extends Component {

    static props = {
        addressLine1: PropTypes.object.isRequired,
        addressLine2: PropTypes.object.isRequired,
        cardOrCash: PropTypes.object.isRequired //must be like radio button
    }

    constructor(props) {
        super(props);
    }

    handleChange (e) {

    }

    render() {
        return (
            <Card>
                <TextField required id="standard-required" label="Required" defaultValue="Enter Name" />
                <TextField required id="standard-required" label="Required" defaultValue="Enter Address 1" />
                <TextField required id="standard-required" label="Required" defaultValue="Enter Address 2" />
                <RadioGroup aria-label="gender" name="gender1" onChange={this.handleChange}>
                    <FormControlLabel value="Card" control={<Radio />} label="Card" />
                    <FormControlLabel value="Cash on delivery" control={<Radio />} label="Cash" />
                </RadioGroup>
                <Button>Confirm</Button>
                <Button>Cancel</Button>
            </Card>
        );
    }
}


export default CheckoutForm;
