import React, {Component} from 'react';
import ComplexNavigationNoDrawer from "../Components/Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Container,Avatar,Table,TableBody,TableHead,TableCell,TableRow} from "@material-ui/core";
import axios from 'axios';
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

class Profile extends Component {


    constructor(props) {
        super(props);
        this.state={user:''}
    }


     componentDidMount() {

        axios.post('http://localhost:8080/userget',{username:this.props.user}).then(res=>{


            this.setState({
                user:res.data
            })



        })

     }


    table= {
        minWidth: 650
    }





    render() {
        return (
            <div>
                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
            <Container maxWidth={"md"}>

                <h3 style={{marginTop:'20px'}}><NotificationsActiveIcon />  Profile</h3>
                <div style={{marginLeft:'40%',marginTop:'20px'}}>
             <Avatar style={{    color: 'white',
                 backgroundColor: 'orange',width:'150px',height:'150px'}}></Avatar></div>

                <div>
                <h3 >{this.state.user.fname+" "+this.state.user.lname}</h3>
                    <label>{this.state.user.type}</label>
                </div>


                <div>
                    <Table className={this.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Personal Details</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                                <TableRow >
                                    <TableCell component="th" scope="row">
                                     Username
                                    </TableCell>
                                    <TableCell align="right"> {this.state.user.username} </TableCell>

                                </TableRow>


                            <TableRow >
                                <TableCell component="th" scope="row">
                                    Email
                                </TableCell>
                                <TableCell align="right"> {this.state.user.email} </TableCell>

                            </TableRow>

                            <TableRow >
                                <TableCell component="th" scope="row">
                                    Contact
                                </TableCell>
                                <TableCell align="right"> {this.state.user.cnumber} </TableCell>

                            </TableRow>



                            <TableRow >
                                <TableCell component="th" scope="row">
                                    Address
                                </TableCell>
                                <TableCell align="right"> {this.state.user.address} </TableCell>

                            </TableRow>


                            <TableRow >
                                <TableCell component="th" scope="row">
                                    BirthDay
                                </TableCell>
                                <TableCell align="right"> {this.state.user.bday} </TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </div>



            </Container>
            </div>
        );
    }
}








export default Profile;
