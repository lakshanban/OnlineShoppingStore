import React, {Component} from 'react';
import SimpleNavigationBar from "../Common/SimpleNavigationBar/SimpleNavigationBar";
import Login from "../Login/Login";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Signup from "../Signup/Signup";

class Test extends Component {

    constructor(props) {
        super(props);
    }



    render() {



        switch (this.props.page) {

            case "login":
                return <Login/>

            case "signup":
                return <Signup/>


        }


    }

}


function mapStateToProps(state) {

    return {

        page: state.PageReducer

    }

}

export default connect(mapStateToProps)(Test);

