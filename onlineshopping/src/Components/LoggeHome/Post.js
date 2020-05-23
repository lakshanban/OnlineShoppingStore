import React from "react";
import {Button, Paper} from "@material-ui/core";
import './Post.css'

export default function Post(props){


    const trimDescription=(text)=>{

        if(text.length>45){

            text=text.substring(0,45)+'....'

        }
        return text;
    }

    const onClick=()=>{

        props.setproduct('SETPRODUCT',props.product)
        props.dispatch('PRODUCT')


    }

    return (
        <div>

            <Paper elevation={3} className="Paper">
                <h6>{props.product.pname}</h6>
                <img src={`data:image/jpeg;base64,${props.product.pimages[0].data}`} className="image"/>
                <p>{trimDescription(props.product.pdescription)}</p>
                <Button variant={"outlined"} color={"secondary"} onClick={()=>{onClick()}}>Buy Now</Button>
            </Paper>
        </div>
    )

}
