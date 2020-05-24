import React, {Component, useEffect, useState} from 'react';
//import Grid from "@material-ui/core/Grid";
import Grid from '@material-ui/core/Grid';
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
import ProductsTableStoreManager from "../Admin Panel/Tables/ProductTableStoreManager";
import Notices from "../Notification/Notices";

function AddProductDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [openImgDialog, setOpenImgDialog] = React.useState(false);
    const [productId, setproductId] = React.useState("");
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/getallcategories').then(res=>{
            setCategories(res.data)
        })
    })

    const handleClickOpenImg = () => {
        setOpenImgDialog(true);
    };

    const handleCloseImg = () => {
        setOpenImgDialog(false);
        setOpen(false);
        deleteProduct();
    };

    const handleCloseAll = () => {
        setOpenImgDialog(false);
        setOpen(false);
    };

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
                setproductId(res.data);
                console.log(productId)
                if (res.data != null){
                    handleClickOpenImg()
                }
            }
            else {
                alert('System Error................')
            }
            //console.log(res.data)
        })
    }

    const deleteProduct = () => {
        var bodyFormData = new FormData();
        bodyFormData.set('id', productId);

        axios.post('http://localhost:8080/deleteproduct',bodyFormData).then(res=>{
            alert("Data not saved...")
        })
    }

    const productImagesSubmitHanlder=(e)=>{
        e.preventDefault();

        const fileInput = document.querySelector("#p1").files[0];
        const fileInput2 = document.querySelector("#p2").files[0];
        const fileInput3 = document.querySelector("#p3").files[0];

        let images=[];

        images.push(fileInput)
        images.push(fileInput2)
        images.push(fileInput3)
        console.log(images)


            var bodyFormData = new FormData();
            bodyFormData.append('file', images[0]);
            bodyFormData.set('productid', productId);
            console.log(productId);
            axios({
                method: 'post',
                url: 'http://localhost:8080/uploadimages',
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
            }).then(res=> {
                if (res.data){
                    var bodyFormData = new FormData();
                    bodyFormData.append('file', images[1]);
                    bodyFormData.set('productid', productId);
                    console.log(productId);
                    axios({
                        method: 'post',
                        url: 'http://localhost:8080/uploadimages',
                        data: bodyFormData,
                        headers: {'Content-Type': 'multipart/form-data' }
                    }).then(res=> {
                        if (res.data){
                            var bodyFormData = new FormData();
                            bodyFormData.append('file', images[2]);
                            bodyFormData.set('productid', productId);
                            console.log(productId);
                            axios({
                                method: 'post',
                                url: 'http://localhost:8080/uploadimages',
                                data: bodyFormData,
                                headers: {'Content-Type': 'multipart/form-data' }
                            }).then(res=> {
                                if (res.data){
                                    handleCloseAll();
                                    alert("all images uploaded");
                                }
                            })

                        }
                    })
                }
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
                    <form onSubmit={productSubmitHanlder}>
                    <TextField name={"productName"} autoFocus margin="dense" id="productName" label="Product Name" type="text" fullWidth required/>
                    <TextField name={"productDiscription"} autoFocus margin="dense" id="productDiscription" label="Product Description" type="text" fullWidth required/>
                    <TextField name={"productDiscount"} autoFocus margin="dense" id="discountPercentage" label="Discount Percentage" type="number" fullWidth/>
                    <TextField name={"productPrice"} autoFocus margin="dense" id="markedPrice" label="Marked Price" type="number" fullWidth required/>
                    <TextField name={"productOwner"} value={props.user} autoFocus margin="dense" id="productOwner" label="Product Owner" type="text" fullWidth/>

                    <InputLabel id="demo-simple-select-label">Product Category</InputLabel>
                    <Select name={"productCategory"} autoFocus margin="dense" label="Category" id="demo-simple-select-label" fullWidth>
                        {categories.map((text, index) => (
                            <MenuItem value={text}>{text}</MenuItem>
                        ))}
                    </Select>

                    <Button type={"submit"} className={"float-right"} style={{marginTop:15, marginBottom:15}} variant="contained" color="primary">Add Product</Button>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={openImgDialog} onClose={handleCloseImg} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">ADD PRODUCT IMAGES</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please add three images.....
                    </DialogContentText>
                    <form onSubmit={productImagesSubmitHanlder} >
                        <Input name={"image1"} autoFocus margin="dense" id="p1" label="product photo" type="file" fullWidth style={{marginTop:10}}/>
                        <Input name={"image2"} margin="dense" id="p2" label="product photo" type="file" fullWidth style={{marginTop:10}}/>
                        <Input name={"image3"} margin="dense" id="p3" label="product photo" type="file" fullWidth style={{marginTop:10}}/>
                        <Button type={"submit"} className={"float-right"} style={{marginTop:5}} variant="contained" color="primary">Add Images</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function NotificationDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const broadcastNotification = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/noticeadd", {
            "topic": e.target.topic.value,
            "content": e.target.content.value
        }).then(req => {
            alert("Notifiction broadcasted...")
            handleClose()
        })
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                ADD NOTIFICATION
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">ADD NOTIFICATION</DialogTitle>
                <form onSubmit={broadcastNotification}>
                <DialogContent>
                    <DialogContentText>This notification will be broadcasted</DialogContentText>
                    <TextField name={"topic"} autoFocus margin="dense" id="name" label="Topic" type="text" fullWidth/>
                    <TextField name={"content"} autoFocus margin="dense" id="name" label="Content" type="text" fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button type="submit" color="primary">Broadcast</Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}


class ProductsData extends Component {

    render() {
        return (
            <div>
                <ComplexNavigationNoDrawer dispatch={this.props.dispatch} userobject={this.props.userobject}/>
                <div style={{marginTop:50}}></div>
                <h3>PRODUCT DATA</h3>
                <div className="container-lg">
                    <div  style={{marginBottom: 10}}>
                        <Grid container spacing={3} alignItems="flex-end" className="justify-content-end">
                            <Grid item>
                                <NotificationDialog/>
                            </Grid>
                            <Grid item>
                                <AddProductDialog user={this.props.user}/>
                            </Grid>
                        </Grid>
                    </div>
                    <ProductsTableStoreManager user={this.props.user}/>
                </div>
            </div>
        );
    }
}

export default ProductsData;
