import React, {useEffect, useState} from "react";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default function CommentList(props) {

    const[commentlist,setComment] =useState([]);


    useEffect(()=>{

        axios.post('http://localhost:8080/getcomments',{pid:props.product.id}).then(res=>{

            console.log(res.data)
            setComment(res.data)
        })

    })


    return (
        <List >

            {  commentlist.map(comment=>{


               return <div>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={comment.from}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                >
                                   {comment.comment}
                                </Typography>
                                {comment.date}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                < Divider variant="inset" component="li" />

                </div>
            })  }

        </List>
    );

}
