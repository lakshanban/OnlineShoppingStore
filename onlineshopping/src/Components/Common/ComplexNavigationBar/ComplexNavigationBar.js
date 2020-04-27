import React from "react";
import {AppBar,IconButton,Toolbar,Typography,InputBase,Badge,} from "@material-ui/core";
import {Search as SearchIcon,Mail as MailIcon,Notifications as NotificationsIcon,More as MoreIcon,AccountCircle,Menu as MenuIcon} from '@material-ui/icons'

export default  function (props) {




    return (<div>



        <AppBar position="static">
            <Toolbar>

                <Typography  variant="h6" noWrap>
                    Black And Blue Clothing
                </Typography>
                <div style={{display:'block',marginLeft:'20%'}} >
                    <div  >

                    </div>
                    <InputBase   type="text"  style={{background:'white',borderRadius:'25px',width:'500px',height:'40px',border:'2px solid #73AD21'}}
                        placeholder="Search….."

                    />
                </div>
                <SearchIcon />
                <div />
                <div style={{marginLeft:'18%'}}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"

                        aria-haspopup="true"

                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
                <div >
                    <IconButton
                        aria-label="show more"

                        aria-haspopup="true"

                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>





    </div>)
}
