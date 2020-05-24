import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import {Button} from "@material-ui/core";
import axios from "axios";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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


function createUserData(uid, username, fname, lname, address, mobile, usertype, email, actionEdit,actionDelete) {
    return { uid, username, fname, lname, address, mobile, usertype, email, actionEdit,actionDelete };
}


export default function UserTable() {

    const rows = [];

    const[users,setUsers]= useState([])
    const[userName, setUserName] = useState("");

    const [open, setOpen] = React.useState(false);

    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

    const[userId, setUserId] = useState("");

    const handleDeleteDialogOpen = () => {
        setOpenDeleteDialog(true);
    };

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const fetchUsers= async ()=>{
        await axios.get('http://localhost:8080/usergetall').then(res=> {
            setUsers(res.data);
        })
    }
    useEffect(()=>{
        fetchUsers()
    },0)

    const handleDelete=(user)=>{
        setUserName(user.username)
        handleDeleteDialogOpen();
    }

    {
        users.map(user => {
            rows.push(createUserData(user.id, user.username, user.fname, user.lname, user.address, user.cnumber,
                user.usertype, user.email,
                <Button size="small" onClick={()=>{handleResetPassword(user)}} variant="contained" color="primary">RESET</Button>,
                <Button size="small" onClick={()=>{handleDelete(user)}} variant="contained" color="secondary">Delete</Button>
            ));
        })
    }

    const userDeleteConfirm = () => {
        var bodyFormData = new FormData();
        bodyFormData.set('username', userName );
        axios.post('http://localhost:8080/deleteuser',bodyFormData).then(res=>{
            alert("User deleted...");
            handleDeleteDialogClose();
        })
    }

    const handleResetPassword=(user)=>{
        setUserName(user.username);
        handleClickOpen();
    }

    const resetPasswordConfirm = (e) => {
        e.preventDefault()

        let newpassword = e.target.newpassword.value;
        let confirmPassword = e.target.confirmPassword.value;

        if (newpassword != confirmPassword){
            alert("Password fields does not match");
        }else {
            var bodyFormData = new FormData();
            bodyFormData.set('username', userName );
            bodyFormData.set('password', newpassword );
            axios.post('http://localhost:8080/resetpassword',bodyFormData).then(res=>{
                alert("Password reset successfully.....");
                handleClose();
            })
        }


    }


    return (

        <div>

            <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Delete User"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This user will be deleted permernenty. Can not be undo...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose} color="primary">Cancel</Button>
                    <Button onClick={userDeleteConfirm} color="primary" autoFocus>Delete</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>
                <form onSubmit={resetPasswordConfirm}>
                <DialogContent>
                    <TextField name={"newpassword"} autoFocus margin="dense" id="name" label="Password" type="password" fullWidth/>
                    <TextField name={"confirmPassword"} autoFocus margin="dense" id="name" label="Confirm PAssword" type="password" fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button type="submit" color="primary">Change</Button>
                </DialogActions>
                </form>
            </Dialog>


        <Paper style={{ height: 400, width: '100%' }}>
            <VirtualizedTable
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                columns={[
                    {
                        width: 120,
                        label: 'Username',
                        dataKey: 'username',
                    },
                    {
                        width: 180,
                        label: 'Fname',
                        dataKey: 'fname',
                    },
                    {
                        width: 120,
                        label: 'Lname',
                        dataKey: 'lname',

                    },
                    {
                        width: 200,
                        label: 'Address',
                        dataKey: 'address',

                    },
                    {
                        width: 120,
                        label: 'mobile',
                        dataKey: 'mobile',
                    },
                    {
                        width: 120,
                        label: 'Type',
                        dataKey: 'usertype',
                    },
                    {
                        width: 120,
                        label: 'Email',
                        dataKey: 'email',
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
