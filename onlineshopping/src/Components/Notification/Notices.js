import React, {Component} from 'react';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Container,List,ListItem,Divider,ListItemText} from "@material-ui/core";

class Notices extends Component {

    constructor(props) {
        super(props);
    }

     style={
    width: '100%',
    maxWidth: '360',
    backgroundColor: '#ffffff',
}



    render() {
        return (
            <div>

                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>

                <Container maxWidth={"md"}>

                    <Divider style={{marginTop:'20px'}} />
                    <List component="nav" style={this.style} aria-label="mailbox folders">

                        <ListItem button>
                            <h5>Test Notification</h5><br/>
                            <div style={{marginLeft:'10px'}}>Sometimes, we want to run some additional code after React has updated the DOM. Network requests,
                                manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. We say that
                                because we can run them and immediately forget about them. Let’s compare how classes and Hooks let us express
                                such side effects</div>
                        </ListItem>
                        <Divider style={{marginBottom:'20px'}}/>

                    </List>





                </Container>

            </div>
        );
    }

}
export default Notices;
