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
import Notices from "../Notification/Notices";
import Chat from "../Chat/Chat";
import AdminHome from "../Admin Panel/AdminHome";
import Product from "../Product/Product";
import setProduct from "../../redux/Actions/setProduct";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import WishList from "../WishList/WishList";
import DetailForm from "../PaymentGateway/DetailForm";
<<<<<<< HEAD
import PurchasedList from "../Purchased_Items/PurchasedList";
import P_Product from "../Purchased_Items/purchsedProduct/P_Product";
=======
import CheckoutForm from "../PaymentGateway/CheckoutForm";
import setPurchase from "../../redux/Actions/setPurchase";
>>>>>>> a3fb52502b315f291e53b5ee0009745f965a82db

class Test extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        switch (this.props.page) {

            case "login":
                return <Login dispatch={this.props.dispatch} setuser={this.props.setuser} setuserobject={this.props.setuserobject} setpurchase={this.props.setpurchase}/>

            case "signup":
                return <Signup/>

            case "profile":
                return <Profile dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setpurchase={this.props.setpurchase}/>

            case 'home':
                return <LoggedHome dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setproduct={this.props.setproduct} setpurchase={this.props.setpurchase}/>

            case 'notice':
                console.log(this.props.userobject)
                return  <Notices  dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setpurchase={this.props.setpurchase}/>

            case 'chat':

                return <Chat dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setpurchase={this.props.setpurchase}/>

            case 'admin':

                return  <AdminHome dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setpurchase={this.props.setpurchase}/>

            case 'product':

                return <Product dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} product={this.props.product} setpurchase={this.props.setpurchase} />

            case 'cart':

                return <ShoppingCart dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setproduct={this.props.setproduct} setpurchase={this.props.setpurchase}/>

            case 'list':

                return <WishList dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setproduct={this.props.setproduct} setpurchase={this.props.setpurchase}/>

            case 'pay':

<<<<<<< HEAD
                return <DetailForm dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setproduct={this.props.setproduct}/>

            case 'purchased':

                return <PurchasedList dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setproduct={this.props.setproduct}/>

            case 'pproduct':

                return <P_Product dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} product={this.props.product} />
        }

=======
                return <DetailForm dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setproduct={this.props.setproduct} setpurchase={this.props.setpurchase}/>
>>>>>>> a3fb52502b315f291e53b5ee0009745f965a82db

            case 'checkout'  :
                return  <CheckoutForm dispatch={this.props.dispatch} user={this.props.user} userobject={this.props.userobject} setproduct={this.props.setproduct} setpurchase={this.props.setpurchase}/>

        }
    }

}


function mapStateToProps(state) {

    return {

        page: state.PageReducer,
        user: state.UserReducer,
        userobject:state.UserObjectReducer,
        product:state.ProductReducer,
        purchase: state.PurchaseReducer

    }

}

function  mapDispatchToProps(dispatch) {

    return{

        dispatch: (payload)=> { dispatch(loadpage(payload))},
        setuser: (type,payload)=>{dispatch(setuser(type,payload))},
        setuserobject:(type,payload)=>{dispatch(setuserobject(type,payload))},
        setproduct:(type,payload)=>{dispatch(setProduct(type,payload))},
        setpurchase: (type, payload)=>{dispatch(setPurchase(type,payload))}
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Test);




