import {Component} from "react";
import React from 'react'
import './DetailForm.css';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Button, Card, Paper, TextField} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';

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
                showing: true,
        }
            this.HandleSubmit = this.HandleSubmit.bind(this);

    }

    HandleSubmit=(e)=>{
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

        this.props.setpurchase('PURCHASE',data);
        console.log('submit');
        console.log(data);

    }

     onClick=()=>{
         this.props.setpurchase('PURCHASE',this.state)
         this.props.dispatch('CHECKOUT')
         console.log(this.state);
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

                <Card>

                <form onSubmit={this.HandleSubmit} >

                    <TextField name={"name"}
                               required id="standard-required"
                               label="Enter Name"
                               className={"usernametext"}/><br/>
                    <TextField name={"address1"}
                               required id="standard-required"
                               label="Enter Address 1"
                               className={"usernametext"} /><br/>
                    <TextField name={"address2"}
                               required id="standard-required"
                               label="Enter Address 2"
                               className={"usernametext"} /><br/>
                    <TextField name={"city"}
                               required id="standard-required"
                               label="City"
                               className={"usernametext"} /><br/>
                    <TextField name={"postalCode"}
                               required id="standard-required"
                               label="Postal code"
                               className={"usernametext"}/><br/><br/>

                        <p>Press below cash option if you wish to pay cash on delivery</p>

                        <br/>
                        <FormControlLabel
                                name={"cash"}
                                color="secondary"
                                label="Cash"
                                control={<Radio/>}
                                className={"usernametext"}
                              onClick={() => this.setState({showing: !showing})}
                        >
                            Cash payment
                        </FormControlLabel>

                        {showing ?
                        <div className="cardDetails">
                            <TextField name={"cardNumber"}
                                       required id="standard-required"
                                       label="Card number"
                                       className={"usernametext"}/><br/>
                            <TextField name={"CardOtp"}
                                       required id="standard-required"
                                       label="OTP"
                                       className={"usernametext"}/><br/>
                            <TextField name={"CardDate"}
                                       required id="standard-required"
                                       label="Expiry Date"
                                       className={"usernametext"}/>
                        </div> : null
                        }
                        <br/>

                        <Button color={"primary"}
                                style={{margin:"20px", width: "100px"}}
                                variant={"contained"}
                                className={"usernametext"}
                                type={"submit"}
                                onClick={()=>{this.onClick()}}
                        >
                            Confirm
                        </Button>


                        <Button variant="contained"
                                color="secondary"
                                style={{margin:"20px", width:"100px"}}
                                className={"usernametext"}
                                onClick={()=>{this.props.dispatch('CART')}}
                        >
                            Cancel
                        </Button>

                </form>

                </Card>

                </Paper>

            </div>

        </div>);

    }
}

export default DetailForm;
