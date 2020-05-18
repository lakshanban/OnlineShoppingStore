import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import {Button} from "@material-ui/core";
import axios from "axios";


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

// ---
const sample = [
    ['MEN1234', 'Men Black T-Shirt', 'MEN-XL', 'full cotton and imported', 1799.90, 10, 1899.90
    ],
];

function createData(pid, name, type, description, basicprice, discountpercentage, markedprice, actionEdit,actionDelete) {
    return {pid, name, type, description, basicprice, discountpercentage, markedprice, actionEdit,actionDelete };
}



export default function ProductsTable() {

    const rows = [];

    const[userId,setUserID]= useState(0)
    const[products,setProducts]= useState([])
    //const[value,setValue]= useState([])

    const fetchProducts= async ()=>{
        await axios.get('http://localhost:8080/getallproducts').then(res=> {
            setProducts(res.data);
        })
    }

    useEffect(()=>{
        fetchProducts();
    },[userId])

    const getProductId = (e) => {
        alert(e.target.value);
    }

    {
        products.map(product => {
            rows.push(createData(product._id, product.pname, product.pcategory, product.pdescription,
                product.pprice, product.pdiscount, product.powner,
                <Button size="small" variant="contained" value={"rr"} onClick={getProductId} color="primary">Edit</Button>,
                <Button size="small" variant="contained" color="secondary">Delete</Button>
            ));
        })
    }

    return (

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
    );
}
