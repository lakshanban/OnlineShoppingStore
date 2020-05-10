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
import ProductsTable from "../Admin Panel/Tables/ProductsTable";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import ComplexNavigationNoDrawer from "../Common/ComplexNavigationNoDrawer/ComplexNavigationNoDrawer";

function AddProductDialog() {
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
                Add new product
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">ADD A NEW PRODUCT</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill all feilds to add a new product
                    </DialogContentText>
                    <Input
                        autoFocus
                        margin="dense"
                        id="photo"
                        label="product photo"
                        type="file"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="productId"
                        label="Product Id"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="productName"
                        label="Product Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="productType"
                        label="Product Type"
                        type="text"
                        fullWidth
                    />
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        autoFocus
                        margin="dense"
                        label="Category"
                        id="demo-simple-select-label"
                        fullWidth
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="productDiscription"
                        label="Product Description"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="basicPrice"
                        label="Basic Price"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="discountPercentage"
                        label="Discount Percentage"
                        type="number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="discountPercentage"
                        label="Marked Price"
                        type="number"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Add Product
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

class ProductsData extends Component {

    render() {
        return (
            <div>
                {/*<ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>*/}
                <div style={{marginTop:50}}></div>
                <h3>PRODUCT DATA</h3>
                <div className="container">
                    <div  style={{marginBottom: 10}}>
                        <Grid container spacing={3} alignItems="flex-end" className="justify-content-end">
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Search..." type="search" />
                            </Grid>
                            <Grid item >
                                <AddProductDialog/>
                            </Grid>
                        </Grid>
                    </div>
                    <ProductsTable/>
                </div>
            </div>
        );
    }
}

export default ProductsData;

