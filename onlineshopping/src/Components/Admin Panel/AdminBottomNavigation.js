import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FaceIcon from '@material-ui/icons/Face';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ProductsPanel from "./SubPanels/ProductsPanel";
import Statistics from "./SubPanels/Statistics";
import UserPanels from "./SubPanels/UserPanels";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
    root: {
        // width: 500,
    },
});



function SimpleBottomNavigation(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
                props.changepage(newValue)

            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Products" icon={<ShoppingCartIcon/>} />
            {/*<BottomNavigationAction label="Statistics" icon={<AttachMoneyIcon/>} />*/}
            <BottomNavigationAction label="User panel" icon={<FaceIcon />} />

        </BottomNavigation>
    );
}


class AdminBottomNavigation extends Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className="fixed-bottom" style={{marginBottom:5}}>
                <SimpleBottomNavigation changepage={this.props.changepage}/>
            </div>


        );
    }
}

export default AdminBottomNavigation;
