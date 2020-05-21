import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import {Button} from "@material-ui/core";
import axios from "axios";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import NativeSelectInput from "@material-ui/core/NativeSelect/NativeSelectInput";

import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import DialogActions from '@material-ui/core/DialogActions';


const styles = (theme) => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    table: {
        // temporary right-to-left patch, waiting for
        // https://github.com/bvaughn/react-virtualized/issues/454
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
            paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
        },
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight}
                        className={classes.table}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );

                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            numeric: PropTypes.bool,
            width: PropTypes.number.isRequired,
        }),
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

function createData(pid, name, type, description, basicprice, discountpercentage, markedprice, actionEdit,actionDelete) {
    return {pid, name, type, description, basicprice, discountpercentage, markedprice, actionEdit,actionDelete };
}

export default function ProductsTable() {

    const [open, setOpen] = React.useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [pid, setPid] = React.useState("");

    const handleDialogOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleDeleteDialogOpen = () => {
        setOpenDeleteDialog(true);
    };

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
    };


    const rows = [];

    const[userId,setUserID]= useState(0)
    const[products,setProducts]= useState([])

    const fetchProducts= async ()=>{
        await axios.get('http://localhost:8080/getallproducts').then(res=> {
            setProducts(res.data);
        })
    }

    const [oneProduct, setOneProduct] = React.useState({
        comments: [],
        id: "",
        pcategory: "",
        pdescription: "",
        pdiscount: 0,
        pimages: [],
        pname: "",
        powner: "",
        pprice: 0,
        pratings: [],
    });

    useEffect(()=>{
        fetchProducts();
    },userId)

    {
        products.map(product => {
            rows.push(createData(product.id, product.pname, product.pcategory, product.pdescription,
                product.pprice, product.pdiscount, product.powner,
                <Button size="small" variant="contained" onClick={()=>{handleEdit(product)}} color="primary">Edit</Button>,
                <Button size="small" variant="contained" onClick={()=>{handleDelete(product)}} color="secondary">Delete</Button>
            ));
        })
    }

    const[categories,setCategories] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/getallcategories').then(res=>{
            setCategories(res.data)
        })
    })


    const handleEdit=(product)=>{
        setOneProduct(product);
        handleDialogOpen();
    }

    const handleDelete=(product)=>{
        setPid(product.id);
        handleDeleteDialogOpen();
    }

    const productDeleteConfirm = () => {
        var bodyFormData = new FormData();
        bodyFormData.set('id', pid);
        axios.post('http://localhost:8080/deleteproduct',bodyFormData).then(res=>{
            alert("Product deleted...");
            handleDeleteDialogClose();
        })
    }

    const changeHanlder = (e) => {
        switch (e.target.name) {
            case 'productName' :
                oneProduct.pname = e.target.value;
                break;
            case 'productDiscription' :
                oneProduct.pdescription = e.target.value;
                break;
            case 'productDiscount' :
                oneProduct.pdiscount = e.target.value;
                break;
            case 'productPrice' :
                oneProduct.pprice = e.target.value;
                break;
        }
    }

    const productUpdateSubmitHanlder = (e) => {
        e.preventDefault();
        let productName = e.target.productName.value;
        let productDiscription = e.target.productDiscription.value;
        let productDiscount = e.target.productDiscount.value;
        let productPrice = e.target.productPrice.value;
        let productCategory = e.target.productCategory.value;

        axios.post('http://localhost:8080/updateproduct',{
            id: oneProduct.id,
            pname: productName,
            pdescription: productDiscription,
            pdiscount: productDiscount,
            pprice: productPrice,
            pcategory: productCategory
        }).then(res=>{
            alert("success....")
            handleDialogClose()
        })


    }

    return (
        <div>
        <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">CHANGE PRODUCT</DialogTitle>
            <DialogContent>
                <DialogContentText></DialogContentText>
                <form onSubmit={productUpdateSubmitHanlder}>
                    <TextField name={"productName"} value={oneProduct.pname} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Product Name" type="text" fullWidth required/>
                    <TextField name={"productDiscription"} value={oneProduct.pdescription} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Product Description" type="text" fullWidth required/>
                    <TextField name={"productDiscount"} value={oneProduct.pdiscount} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Discount Percentage" type="number" fullWidth/>
                    <TextField name={"productPrice"} value={oneProduct.pprice} onChange={(event)=> changeHanlder(event)} autoFocus margin="dense" label="Marked Price" type="number" fullWidth required/>
                    <InputLabel id="demo-simple-select-label">Product Category</InputLabel>
                    <NativeSelect defaultValue={oneProduct.pcategory} name={"productCategory"} autoFocus margin="dense" label="Category" id="demo-simple-select-label" fullWidth>
                        {categories.map(text => (
                            <option  value={text}>{text}</option >
                        ))}
                    </NativeSelect>
                    <Button type={"submit"} className={"float-right"} style={{marginTop:15, marginBottom:15}} variant="contained" color="primary">Change Product</Button>
                </form>
            </DialogContent>
        </Dialog>

        <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{"Delete Product"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    This product will be deleted permernenty. Can not be undo...
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDeleteDialogClose} color="primary">Cancel</Button>
                <Button onClick={productDeleteConfirm} color="primary" autoFocus>Delete</Button>
            </DialogActions>
        </Dialog>

        <Paper style={{ height: 400, width: '100%' }}>
            <VirtualizedTable
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                columns={[
                    {
                        width: 180,
                        label: 'Name',
                        dataKey: 'name',
                    },
                    {
                        width: 120,
                        label: 'Type',
                        dataKey: 'type',

                    },
                    {
                        width: 220,
                        label: <div style={{marginLeft:40}}>Description</div>,
                        dataKey: 'description',
                    },
                    {
                        width: 120,
                        label: 'Basic Price',
                        dataKey: 'basicprice',
                        numeric: true,
                    },
                    {
                        width: 120,
                        label: 'Discount(%)',
                        dataKey: 'discountpercentage',
                        numeric: true,
                    },
                    {
                        width: 120,
                        label: 'owner',
                        dataKey: 'markedprice',
                        numeric: true,
                    },
                    {
                        width: 100,
                        label: 'Edit',
                        dataKey: 'actionEdit',
                    },
                    {
                        width: 100,
                        label: 'Delete',
                        dataKey: 'actionDelete',
                    },

                ]}
            />
        </Paper>
        </div>
    );
}

