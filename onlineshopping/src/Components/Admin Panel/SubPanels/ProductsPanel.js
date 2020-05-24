import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Input from "@material-ui/core/Input";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import ProductsTable from "../Tables/ProductsTable";
import {MultiGrid} from "react-virtualized";
import CategoryTable from "../Tables/CategoryTable";

function AddCategoryFormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen} startIcon={<AddCircleIcon/>}>
                view category
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">ADD A NEW CATEGORY</DialogTitle>
                <DialogContent>
                    <DialogContentText>Click + button to add new category</DialogContentText>

                    <CategoryTable/>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

class ProductsPanel extends Component {

    render() {
        return (
            <div>
                <h3>PRODUCT PANEL</h3>
                <div className="container-lg">
                    <div  style={{marginBottom: 10}}>
                        <Grid container spacing={3} alignItems="flex-end" className="justify-content-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Search..." type="search" />
                            </Grid>
                            <Grid item >
                                <AddCategoryFormDialog/>
                            </Grid>
                        </Grid>
                    </div>
                    <ProductsTable/>
                </div>
            </div>
        );
    }
}
export default ProductsPanel;
