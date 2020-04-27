import React from "react";
import {AppBar,Toolbar,IconButton,Typography,Button} from "@material-ui/core";

import GetPageButton from "../../functions/getpage";

function SimpleNavigationBar(props){


    return <div>


        <AppBar position="fixed">
            <Toolbar>

                <Typography variant="h6" style={{marginLeft:'43%'}}>
                      Balck and Blue Clothing
                </Typography>

           <GetPageButton nextpage={props.nextpage} marginLeft="35%"/>

            </Toolbar>
        </AppBar>


    </div>




}


export default SimpleNavigationBar;
