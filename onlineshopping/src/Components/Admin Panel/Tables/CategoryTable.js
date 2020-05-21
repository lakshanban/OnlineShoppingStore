import React, {useEffect, useState} from 'react';
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function CategoryTable() {

    const[userId,setUserID]= useState(0)
    const[category,setCategory]= useState([])

    const fetchCategory= async ()=>{
        await axios.get('http://localhost:8080/getallcategories').then(res=> {
            setCategory(res.data);
        })
    }

    useEffect(()=>{
        fetchCategory();
    })

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const categorySubmitHandler = (e) => {
        e.preventDefault();
        let categoryName = e.target.categoryName.value;

        axios.post('http://localhost:8080/createcategory',{
            cname: categoryName
        }).then(res=>{

        })
    }

    const deleteCategory = (cname) => {
        var bodyFormData = new FormData();
        bodyFormData.set('name', cname);
        axios.post('http://localhost:8080/deletecategory',bodyFormData).then(res=>{
        })
    }

    return (
        <div>
            <form onSubmit={categorySubmitHandler}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <TextField name={"categoryName"} id="input-with-icon-grid" label="category name" />
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained" color="primary">Add</Button>
                </Grid>
            </Grid>
            </form>
            <List dense={dense}>
                {
                    category.map(category => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={category}
                        />
                        <ListItemSecondaryAction>
                            <IconButton onClick={() => deleteCategory(category)} edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    ))
                }
            </List>
        </div>
    );
}
