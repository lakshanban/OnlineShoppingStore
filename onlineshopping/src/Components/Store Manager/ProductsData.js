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
import axios from "axios";

function AddProductDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const productSubmitHanlder=(e)=>{
        e.preventDefault();
        let productName = e.target.productName.value;
        let productDiscription = e.target.productDiscription.value;
        let productDiscount = e.target.productDiscount.value;
        let productPrice = e.target.productPrice.value;
        let productOwner = e.target.productOwner.value;
        let productCategory = e.target.productCategory.value;

        axios.post('http://localhost:8080/addproduct',{
            pname: productName,
            pdescription: productDiscription,
            pdiscount: productDiscount,
            pprice: productPrice,
            powner: productOwner,
            pcategory: productCategory
        }).then(res=>{
            if(res.data){
                alert('New Product Added')
            }
            else {
                alert('User creation failed internal error')
            }
            console.log(res.data)
        })
    }

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
                    {/*<Input*/}
                    {/*    autoFocus*/}
                    {/*    margin="dense"*/}
                    {/*    id="photo"*/}
                    {/*    label="product photo"*/}
                    {/*    type="file"*/}
                    {/*    fullWidth*/}
                    {/*/>*/}
                    <form onSubmit={productSubmitHanlder}>
                    <TextField name={"productName"} autoFocus margin="dense" id="productName" label="Product Name" type="text" fullWidth/>
                    <TextField name={"productDiscription"} autoFocus margin="dense" id="productDiscription" label="Product Description" type="text" fullWidth/>
                    <TextField name={"productDiscount"} autoFocus margin="dense" id="discountPercentage" label="Discount Percentage" type="number" fullWidth/>
                    <TextField name={"productPrice"} autoFocus margin="dense" id="markedPrice" label="Marked Price" type="number" fullWidth/>
                    <TextField name={"productOwner"} value={"Manager1"} autoFocus margin="dense" id="productOwner" label="Product Owner" type="text" fullWidth/>

                    <InputLabel id="demo-simple-select-label">Product Category</InputLabel>
                    <Select name={"productCategory"} autoFocus margin="dense" label="Category" id="demo-simple-select-label" fullWidth>
                        <MenuItem value={"Men"}>Men</MenuItem>
                        <MenuItem value={"Women"}>Wemen</MenuItem>
                        <MenuItem value={"All"}>All</MenuItem>
                    </Select>

                    <Button type={"submit"} className={"float-right"} style={{marginTop:5}} variant="contained" color="primary">Add Product</Button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
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

