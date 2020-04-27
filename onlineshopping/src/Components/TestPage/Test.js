import React, {Component} from 'react';
import SimpleNavigationBar from "../Common/SimpleNavigationBar/SimpleNavigationBar";
import Login from "../Login/Login";
import {bindActionCreators} from "redux";
import {connect, useDispatch} from "react-redux";
import Signup from "../Signup/Signup";
import Profile from "../../Profile/Profile";
import loadpage from "../../redux/Actions/loadpage";
import LoggedHome from "../LoggeHome/LoggedHome";

class Test extends Component {

    constructor(props) {
        super(props);
    }



    render() {



        switch (this.props.page) {

            case "login":
                return <Login dispatch={this.props.dispatch}/>

            case "signup":
                return <Signup/>

            case "profile":
                return <Profile />

            case 'home':
                return <LoggedHome dispatch={this.props.dispatch}/>


        }


    }

}


function mapStateToProps(state) {

    return {

        page: state.PageReducer

    }

}

function  mapDispatchToProps(dispatch) {

    return{

        dispatch: (payload)=> { dispatch(loadpage(payload))}
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Test);




