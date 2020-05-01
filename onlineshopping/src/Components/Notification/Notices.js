import React, {Component, useEffect, useState} from 'react';
import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";
import {Container,List,ListItem,Divider,ListItemText} from "@material-ui/core";
import axios from 'axios'

function Notices(props) {

   const  [notices,setNotices]=useState('');

   function update() {

       axios.post('http://localhost:8080/noticegetall', {}).then(res => {


           setNotices(res.data)

           console.log(notices)

       })

   }



    return (
        <div>

            <ComplexNavigationNoDrawer dispatch={props.dispatch} userobject={props.userobject}/>

            <Container maxWidth={"md"}>

                <Divider style={{marginTop: '20px'}}/>
                <List component="nav"  aria-label="mailbox folders">



                    {/*{notices.map(notice => {*/}

                    {/*    return (*/}
                    {/*        <div className={"listIem"}>*/}
                    {/*            <ListItem button>*/}
                    {/*                <h5>Test Notification</h5><br/>*/}
                    {/*                <div style={{marginLeft: '10px'}}>Sometimes, we want to run some additional code*/}
                    {/*                    after React has updated the DOM. Network requests,*/}
                    {/*                    manual DOM mutations, and logging are common examples of effects that don’t*/}
                    {/*                    require a cleanup. We say that*/}
                    {/*                    because we can run them and immediately forget about them. Let’s compare how*/}
                    {/*                    classes and Hooks let us express*/}
                    {/*                    such side effects*/}
                    {/*                </div>*/}
                    {/*            </ListItem>*/}
                    {/*            <Divider style={{marginBottom: '20px'}}/>*/}

                    {/*        </div>*/}
                    {/*    )*/}
                    {/*})*/}
                    {/*}*/}
                </List>


            </Container>

        </div>
    )

}


export default Notices;
