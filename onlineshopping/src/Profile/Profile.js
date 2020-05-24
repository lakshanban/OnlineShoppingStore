import React, {Component, useEffect, useState} from 'react';
import ComplexNavigationNoDrawer from "../Components/Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Container,Avatar,Table,TableBody,TableHead,TableCell,TableRow} from "@material-ui/core";
import axios from 'axios';
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import Alert from '@material-ui/lab/Alert';

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
            //console.log(res.data)

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

                <h3  style={{marginTop:'20px'}}><NotificationsActiveIcon />  Profile</h3>
                <center>
                    <Avatar style={{color: 'white', backgroundColor: 'orange',width:'150px',height:'150px'}}></Avatar>
                </center>

                <div>
                <h3 >{this.state.user.fname+" "+this.state.user.lname}</h3>
                    <label>{this.state.user.type}</label>
                </div>

                <Grid container spacing={3} alignItems="flex-end" className="justify-content-center">
                    <Grid item>
                        <ChangeProfileDialog user={this.state.user}/>
                    </Grid>
                    <Grid item >
                        <ChangePasswordDialog getUsername={this.state.user.username}/>
                    </Grid>
                </Grid>


                <div>
                    <Table className={this.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Personal Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell component="th" scope="row">Username</TableCell>
                                <TableCell align="right"> {this.state.user.username} </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" scope="row">Email</TableCell>
                                <TableCell align="right"> {this.state.user.email} </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" scope="row">Contact</TableCell>
                                <TableCell align="right"> {this.state.user.cnumber} </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" scope="row">Address</TableCell>
                                <TableCell align="right"> {this.state.user.address} </TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" scope="row">BirthDay</TableCell>
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

function ChangeProfileDialog(props) {
    const [open, setOpen] = React.useState(false);

    const [userData, setUserData] = React.useState({});
    const [userID,setUserID]= useState(0)

    const handleClickOpen = () => {
        setUserData(props.user)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        //setUserData({})
    };

    const changeHanlder = (e) => {
        switch (e.target.name) {
            case 'firstname' :
                userData.fname = e.target.value;
                break;
            case 'lastname' :
                userData.lname = e.target.value;
                break;
            case 'email' :
                userData.email = e.target.value;
                break;
            case 'contact' :
                userData.cnumber = e.target.value;
                break;
            case 'address' :
                userData.address = e.target.value;
                break;
            case 'birthday' :
                userData.bday = e.target.value;
                break;
        }
        //console.log(userData)
    }

    const editProfileSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/updateprofile',{
            username: props.user.username,
            fname: e.target.firstname.value,
            lname: e.target.lastname.value,
            email: e.target.email.value,
            cnumber: e.target.contact.value,
            address: e.target.address.value,
            bday: e.target.birthday.value
        }).then(res=>{
            if(res.data){
                alert("User profile updated")
                handleClose()
            }
            else {
                alert('User profile update error')
            }
        })

    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Edit Profile
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Details ({props.user.username})</DialogTitle>
                <form onSubmit={editProfileSubmitHandler}>
                <DialogContent>
                    <TextField name={"firstname"} defaultValue={userData.fname} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="First name" type="text" fullWidth/>
                    <TextField name={"lastname"} defaultValue={userData.lname} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Last name" type="text" fullWidth/>
                    <TextField name={"email"} defaultValue={userData.email} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Email" type="email" fullWidth/>
                    <TextField name={"contact"} defaultValue={userData.cnumber} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Contact" type="number" fullWidth/>
                    <TextField name={"address"} defaultValue={userData.address} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Address" type="text" fullWidth/>
                    <TextField name={"birthday"} defaultValue={userData.bday} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Birthday" type="date" fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button type="submit" color="primary">Save</Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

function ChangePasswordDialog(props) {

    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setError(false);
    };

    const changePasswordHandler = (e) => {
        e.preventDefault();
        let oldpassword = e.target.oldpassword.value;
        let newpassword = e.target.newpasword.value;
        let confirmpassword = e.target.confirmpassword.value;

        if (newpassword != confirmpassword){
            setError(true)
            setErrorMessage('password does not match')
        }else if (newpassword.toString().length < 8){
            setError(true)
            setErrorMessage('Password must be 8 or more characters long')
        }else {
            axios.post('http://localhost:8080/changepassword',{
                username: props.getUsername,
                oldPassword: oldpassword,
                newPassword: newpassword
            }).then(res=>{
                if(res.data == 'faliure'){
                    setError(true)
                    setErrorMessage('Old password is worng')
                }
                else {
                    handleClose()
                    alert('Password changed')
                }
            })
        }



    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Change Password
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Password (Username: {props.getUsername})</DialogTitle>
                {/*<DialogContentText></DialogContentText>*/}
            <form onSubmit={changePasswordHandler}>
                <DialogContent>
                    <TextField name={"oldpassword"} autoFocus margin="dense" id="name" label="Old Password" type="password" fullWidth/>
                    <TextField name={"newpasword"} autoFocus margin="dense" id="name" label="New Password" type="password" fullWidth/>
                    <TextField name={"confirmpassword"} autoFocus margin="dense" id="name" label="Change Password" type="password" fullWidth/>
                    {error? <Alert severity="error">{errorMessage}</Alert>: ""}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button  color="primary" type="submit">Change</Button>
                </DialogActions>
            </form>
            </Dialog>
        </div>
    );
}
