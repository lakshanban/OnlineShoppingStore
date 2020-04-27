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

class Test extends Component {

    constructor(props) {
        super(props);


    }



    render() {



        switch (this.props.page) {

            case "login":
                return <Login dispatch={this.props.dispatch} setuser={this.props.setuser}/>

            case "signup":
                return <Signup/>

            case "profile":
                return <Profile dispatch={this.props.dispatch} user={this.props.user}/>

            case 'home':
                return <LoggedHome dispatch={this.props.dispatch} user={this.props.user}/>


        }


    }

}


function mapStateToProps(state) {

    return {

        page: state.PageReducer,
        user: state.UserReducer

    }

}

function  mapDispatchToProps(dispatch) {

    return{

        dispatch: (payload)=> { dispatch(loadpage(payload))},
        setuser: (type,payload)=>{dispatch(setuser(type,payload))}
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Test);




