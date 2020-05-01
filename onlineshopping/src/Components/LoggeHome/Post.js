import React from "react";
import {Button, Paper} from "@material-ui/core";
import './Post.css'
import Tshirt from './tshirt.jpg'



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

                <h6>{props.product.name}</h6>

                <img src={Tshirt} className="image"/>

                <p>{trimDescription(props.product.description)}</p>

                <Button variant={"outlined"} color={"secondary"} onClick={()=>{onClick()}}>Buy Now</Button>

            </Paper>



        </div>
    )

}
