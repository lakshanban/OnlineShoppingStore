import React, {Component} from 'react';
import Statistics from "./SubPanels/Statistics";
import UserPanels from "./SubPanels/UserPanels";
import ProductsPanel from "./SubPanels/ProductsPanel";
import {Button} from "@material-ui/core";
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import AdminBottomNavigation from "./AdminBottomNavigation";


class AdminHome extends Component {

    constructor(props) {
        super(props);

        this.state={
            page:0
        }
    }

    changepage=(page)=>{
        this.setState({
            page:page
        })
        console.log(page)
    }

    render() {

        switch(this.state.page) {

            case 0:
                return (
                    <div>
                        <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
                        <ProductsPanel />
                        <AdminBottomNavigation changepage={this.changepage}/>
                    </div>
                    )


            // case 1:
            //     return (
            //         <div>
            //             <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
            //             <Statistics/>
            //             <AdminBottomNavigation changepage={this.changepage}/>
            //         </div>
            //         )


            case 1:
                return(
                    <div>
                        <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
                        <UserPanels />
                        <AdminBottomNavigation changepage={this.changepage}/>
                    </div>
                    )

        }
    }}


export default AdminHome;
