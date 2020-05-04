import React, {Component, useEffect, useState} from 'react';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Container,List,ListItem,Divider,ListItemText} from "@material-ui/core";
import axios from 'axios'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


class Notices extends Component {

    constructor(props) {
        super(props);

        this.state={
            notices:[]
        }
    }

    componentDidMount() {

        axios.post('http://localhost:8080/noticegetall',{}).then(res=>{

            console.log(res.data)

            this.setState({notices:res.data})
        })
    }


    render() {
        return (
            <div>

                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>

                <Container maxWidth={"md"}>
                    <h3 style={{marginTop:'20px'}}><NotificationsActiveIcon />  Notifications</h3>


                    <Divider style={{marginTop: '20px'}}/>
                    <List component="nav"  aria-label="mailbox folders">



                        {
                            this.state.notices.map(notice=>{

                              return  <div className={"listIem"} >
                                    <ListItem button>
                                        <h5>{notice.topic}</h5><br/>
                                        <div style={{marginLeft: '10px'}}>
                                            {notice.content}
                                        </div>
                                    </ListItem>
                                    <Divider style={{marginBottom: '20px'}}/>

                                </div>


                            })
                        }



                    </List>

                </Container>

            </div>
        );
    }
}

export default Notices;


