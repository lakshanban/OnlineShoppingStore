import React, {Component} from 'react';
import Statistics from "./SubPanels/Statistics";
import UserPanels from "./SubPanels/UserPanels";
import ProductsPanel from "./SubPanels/ProductsPanel";
import {Button} from "@material-ui/core";
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";

class AdminHome extends Component {

    constructor(props) {
        super(props);

        this.state={
            page:1
        }
    }


    // ChangePage=(e)=>{
    //
    //     this.setState({
    //         page:e
    //     })
    //
    // }
    //
    //
    // ReturnPage=()=>{
    //
    //     switch (this.state.page) {
    //
    //         case 1:
    //             return <Statistics />
    //
    //         case 2:
    //             return <UserPanels />
    //
    //         case 3:
    //             return  <ProductsPanel />
    //     }
    //
    //
    // }




    render() {


        return <div>

            <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>


            <h1>ADMINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</h1>
            {/*<Button variant={"contained"} color={"primary"} onClick={this.ChangePage(1)}>Statistics</Button>*/}
            {/*<Button variant={"contained"} color={"primary"} onClick={this.ChangePage(2)}>userpanel</Button>*/}
            {/*<Button variant={"contained"} color={"primary"} onClick={this.ChangePage(3)}>productspael</Button>*/}
        </div>
    }}


export default AdminHome;
