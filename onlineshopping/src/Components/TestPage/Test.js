import React, {Component} from 'react';
import SimpleNavigationBar from "../Common/SimpleNavigationBar/SimpleNavigationBar";
import Login from "../Login/Login";
import {bindActionCreators} from "redux";
import {connect, useDispatch} from "react-redux";
import Signup from "../Signup/Signup";
import Profile from "../../Profile/Profile";
import loadpage from "../../redux/Actions/loadpage";
import LoggedHome from "../LoggeHome/LoggedHome";
import setuser from "../../redux/Actions/setuser";
import setuserobject from "../../redux/Actions/setuserobject";
import UserObjectReducer from "../../redux/Reducers/UserObjectReducer";
import Notices from "../Notification/Notices";
import Chat from "../Chat/Chat";
import AdminHome from "../Admin Panel/AdminHome";

class Test extends Component {

    constructor(props) {
        super(props);

        console.log(this.props.userobject)

    }



    render() {



        switch (this.props.page) {

            case "login":
                return <Login dispatch={this.props.dispatch} setuser={this.props.setuser} setuserobject={this.props.setuserobject}/>

            case "signup":
                return <Signup/>

            case "profile":
                return <Profile dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject}/>

            case 'home':
                return <LoggedHome dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject}/>

            case 'notice':
                console.log(this.props.userobject)
                return  <Notices  dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject}/>

            case 'chat':
                return <Chat dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject}/>

            case 'admin':

                return  <AdminHome dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject}/>


        }


    }

}


function mapStateToProps(state) {

    return {

        page: state.PageReducer,
        user: state.UserReducer,
        userobject:state.UserObjectReducer

    }

}

function  mapDispatchToProps(dispatch) {

    return{

        dispatch: (payload)=> { dispatch(loadpage(payload))},
        setuser: (type,payload)=>{dispatch(setuser(type,payload))},
        setuserobject:(type,payload)=>{dispatch(setuserobject(type,payload))}
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Test);




