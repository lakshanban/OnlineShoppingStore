import React from "react";
import SimpleNavigationBar from "../Common/SimpleNavigationBar/SimpleNavigationBar";
import {TextField,Button} from "@material-ui/core";
import "./Login.css"
import Background from './background.jpg'
import {useState} from 'react';
import {Alert} from "@material-ui/lab";
import axios from 'axios';
import loadpage from "../../redux/Actions/loadpage";
import {useDispatch} from "react-redux";




function Login(props){

         const [uername,setUsername]= useState('');
         const [password,setPassword]= useState('');
         const  [usernameerror,setUsernanmeerror] =useState(false);
         const [passworderror,setPassworderror]= useState(false);
         const [errormessage,setErrormessage]=useState('');
         const [emptyerror,setEmptyerror]=useState(false);

         const dispatch=useDispatch();


    const onChangeHandler=(e)=>{
             e.preventDefault();

             switch (e.target.name) {

                 case 'username':{
                     if(e.target.value.toString().length<6){
                         setUsernanmeerror(true);
                         setErrormessage('Every usernam is More than 6 didgits long')
                     }else{
                         setUsernanmeerror(false);
                         setErrormessage('')
                     }
                     break;
                 }case 'password':{

                     if(e.target.value.toString().length<8){

                         setPassworderror(true);
                         setErrormessage('Every password is More than 8 didgits long')
                     }else{
                         setPassworderror(false);
                         setErrormessage('')

                     }

                     break;
                 }default:
                 { break;}

             }

    }



    const onSubmitHandler=(e)=>{

        e.preventDefault();

        let uname= e.target.username.value;
        let pwd= e.target.password.value;



        if(uname.toString().length===0||pwd.toString().length===0){

            setEmptyerror(true);
            setErrormessage('The fields cannot be empty , please try again using your correct credentials');
            return;

        }else{
            setEmptyerror(false);
            setErrormessage('');

            axios.post('http://localhost:8080/userlogin',{
                username:e.target.username.value,
                password:e.target.password.value
            }).then(res=>{

                if(!res.data){
                    setEmptyerror(true);
                    setErrormessage("Username or password Incorrect")
                }else {

                    props.dispatch('HOME')
                }
            })

        }


    }




       return (<div style={{marginTop:"100px"}}>

           <SimpleNavigationBar nextpage="SIGN_UP"/>

           <div className={"container"} style={{backgroundImage:"url("+Background+")",height:"600px",backgroundPosition:"center",backgroundSize:"cover"}}>

           <div className={"title"}><h1>Login</h1></div>
           <div>“Fashion & Clothing is the one makes you look awesome and unique from others!”</div>

               {
                   usernameerror||passworderror||emptyerror?  <Alert severity="error">{errormessage}</Alert>:""

               }


           <div className={"login-container"}>


               <form onSubmit={onSubmitHandler}>

               <TextField name={"username"} id="outlined-basic" label="Username" variant="outlined" className={"usernametext"} onChange={onChangeHandler}/><br/><br />
               <TextField name={"password"} id="outlined-basic" label="Password" variant="outlined" className={"usernametext"} type={"password"} onChange={onChangeHandler}/><br/><br/>

               <Button color={"primary"} variant={"outlined"} className={"usernametext"} type={"submit"}>Login</Button>


</form>


           </div>


           </div>

       </div>)
}


export default Login;
