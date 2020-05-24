import React, {Component} from 'react';
import SimpleNavigationBar from "../Common/SimpleNavigationBar/SimpleNavigationBar";
import {Button, TextField} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import axios from 'axios'

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state={
            fname:'',
            lname:'',
            bday:'',
            email:'',
            uname:'',
            password:'',
            cpassword:'',
            address:'',
            pnumber:'',
            success:false,
            successmsg:'',

            errors:{

               unameerror:false,
                emailerror:false,
                passworderror:false,


            },
            errormsg:"",
            submiterror:false,
            allerror:false
        }
    }



    onChnageHandler=(e)=>{

        e.preventDefault();
        switch (e.target.name) {

            case 'uname': {

                if (e.target.value.toString().length < 6) {
                    this.setState({
                        errors: {
                            unameerror: true
                        },
                        errormsg: "Username must be 6 or more digits long"
                    })

                } else {

                    /////////////need to implement after backend is done //////////////axios/////////

                    this.setState({
                        errors: {
                            unameerror: false
                        },
                        errorms: ""
                    })
                }

            } break;

            case 'password': {

                if (e.target.value.toString().length < 8) {

                    this.setState({
                        errors: {
                            passworderror: true
                        },
                        errormsg: "Password must be 8 or more characters long"
                    })
                } else {
                    this.setState({
                        errors: {
                            passworderror: false
                        },
                        errormsg: ""
                    })
                }
            }   break;
            case 'email': {

                var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                if (!e.target.value.toString().match(pat)) {
                    this.setState({
                        errors: {
                            emailerror: true
                        },
                        errormsg: "Invalid email type please add valid email address"
                    })
                } else {
                    ////////need to implement after backend is completed

                    this.setState({
                        errors: {
                            emailerror: false
                        },
                        errormsg: ""
                    })
                }


            }  break;
            default:
            {

            }

            if(this.state.errors.emailerror||this.state.errors.passworderror||this.state.errors.passworderror){

                this.setState({
                    allerror:true
                })
            }

        }



    }


    HandleSubmit=(e)=>{

        e.preventDefault();

            if(e.target.fname.value===""||e.target.lname.value===""||e.target.email.value===""||e.target.uname.value===""||e.target.bday.value===""||e.target.password.value===""||e.target.cpassword.value===""|| e.target.address.value===""||e.target.pnumber.value==="" ){

                this.setState({
                    submiterror:true
                })
                return;

            }else if (e.target.password.value != e.target.cpassword.value){
                this.setState({
                    errors: {
                        passworderror: true
                    },
                    errormsg: "Password and confirm password does not match"
                })
            } else{
                this.setState({
                    errors: {
                        passworderror: false
                    },
                    submiterror:false
                })


              axios.post('http://localhost:8080/useradd',{
                  username:e.target.uname.value,
                  fname:e.target.fname.value,
                  lname:e.target.lname.value,
                  address:e.target.address.value,
                  cnumber:e.target.pnumber.value,
                  usertype:"customer",
                  bday: e.target.bday.value,
                  password:e.target.password.value,
                  email:e.target.email.value


              }).then(res=>{
                  if(res.data){
                      this.setState({success:true,
                      successmsg:'user created successfull please login to the system'})
                  }
                  else {
                      alert('User creation failed internal error')
                  }

                  console.log(res.data)
              })


            }

    }
    

    render() {
        return (
            <div style={{marginTop:"80px"}}>

                <SimpleNavigationBar nextpage={"LOGIN"}/>

                <div className="container-lg">

                    <div className={"title"}><h1>Signup Now</h1></div>
                    <div>“Fashion & Clothing is the one makes you look awesome and unique from others!”</div>

                    <div className={"form-container"} style={{marginTop:"10px"}}>
                        {
                            this.state.errors.unameerror||this.state.errors.emailerror||this.state.errors.passworderror?  <Alert severity="error">{this.state.errormsg}</Alert>:""

                        }

                        {
                            this.state.submiterror?  <Alert variant="filled" severity="error">
                                All the fields need to be filled in order to create an account
                            </Alert> :""
                        }
                        {
                            this.state.success?  <Alert variant="filled" severity="success">
                                {this.state.successmsg}
                            </Alert> :""
                        }

                        <form onSubmit={this.HandleSubmit}>
                        <TextField name="fname" id="standard-basic" label="First Name" variant="standard" className={"usernametext"} /><br/><br />
                        <TextField name="lname" id="standard-basic" label="Last Name" variant="standard" className={"usernametext"}  /><br/><br/>
                        <TextField id="date" name="bday" label="Birthday" type="date" defaultValue="2017-05-24" className={"usernametext"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /><br/><br/>
                        <TextField name={"email"} id="standard-basic" label="Email" variant="standard" className={"usernametext"} onChange={this.onChnageHandler} error={this.state.errors.emailerror} /><br/><br />
                        <TextField name={"uname"} id="standard-basic" label="Username" variant="standard" className={"usernametext"} onChange={this.onChnageHandler} error={this.state.errors.unameerror} /><br/><br/>
                        <TextField name={"password"} type={"password"} id="standard-basic" label="Password" variant="standard" className={"usernametext"} onChange={this.onChnageHandler} error={this.state.errors.passworderror} /><br/><br />
                        <TextField name={"cpassword"} type={"password"} id="standard-basic" label="Confirm-Password" variant="standard" className={"usernametext"}  /><br/><br/>
                        <TextField name={"address"} id="standard-basic" label="Address" variant="standard" className={"usernametext"}/><br/><br />
                        <TextField name={"pnumber"} id="standard-basic" label="Phone Number" variant="standard" className={"usernametext"} /><br/><br/>

                        <Button color={"primary"} style={{marginBottom:"50px"}} variant={"contained"} className={"usernametext"} type={"submit"} disabled={this.state.allerror? true:false}>Join Now</Button>

                        </form>


                    </div>
                </div>
            </div>

        );
    }
}

export default Signup;
