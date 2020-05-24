import React, {useEffect, useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import {Button} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from 'axios'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from "@material-ui/core";
import Drawer from "../Common/Drawer/Drawer";
import Carousel from "react-bootstrap/Carousel";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function ComplexNavigationNonLogged(props) {




    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {

        setAnchorEl(null);
        handleMobileMenuClose();

    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={()=>props.dispatch('PROFILE')}>Profile</MenuItem>
            <MenuItem onClick={()=>props.dispatch('LOGIN')}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem >
                <Button color={"secondary"} onClick={()=>{props.dispatch("LOGIN")}}>Login</Button>
            </MenuItem>
        </Menu>
    );

    const[searchList,SetSearchList]= useState([])

    const search=(e)=>{
        axios.post('http://localhost:8080/productsearch',{"query":e.target.value}).then(res=>{
            props.searchproducts(res.data)
        })
    }

    return (
        <div className={classes.grow}>
            <AppBar position="fixed"color={"transparent"}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                    <Drawer filterproducts={props.filterproducts}/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6"  noWrap>
                        Black and Blue
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}></div>
                        <Autocomplete style={{width:'400px'}} id="free-solo-demo" freeSolo
                            options={props.products.map((option) => option.pname)}
                            renderInput={(params) => (
                                 <TextField size={"small"} {...params} label="Search" variant="outlined" onChange={search}/>
                            )}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>



                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <div className={classes.sectionMobile}>
                            <Button color={"secondary"} onClick={()=>{props.dispatch('LOGIN')}}>Login</Button>
                        </div>

                    </div>
                    <div className={classes.sectionMobile}>
                        <Button color={"secondary"} onClick={()=>{props.dispatch('LOGIN')}}>Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

