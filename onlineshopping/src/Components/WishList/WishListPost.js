import React, {useEffect, useState} from "react";
import {Button, Grid, Paper} from "@material-ui/core";
import './Post.css'
import axios from "axios"




export default function WishListPost(props){


    const trimDescription=(text)=>{

        if(text.length>45){

            text=text.substring(0,45)+'....'

        }
        return text;
    }

    const onClick=(product)=>{

        props.setproduct('SETPRODUCT',product)
        props.dispatch('PRODUCT')


    }

    const Remove=(pid)=>{

        axios.post('http://localhost:8080/removefromwishlist',{"username":props.user,"pid":pid}).then(res=>{
            setProducts(res.data)

        })

    }

    const[products,setProducts]= useState([])
    const[userId,setUserID]= useState([])

    useEffect(()=>{

        axios.post('http://localhost:8080/getwishlist',{"username":props.user}).then(res=>{

            console.log(res.data)
            setProducts(res.data)

        })

    },[userId])



    return (

        products.map(product=> {

            return <Grid container item xs={4} spacing={4} style={{margin:'00px'}} className="gridItem" key={product.id}>



            <div>

                <Paper elevation={3} className="Paper">

                    <h6>{product.pname}</h6>

                    <img src={`data:image/jpeg;base64,${product.pimages[1].data}`} className="image"/>

                    <p>{trimDescription(product.pdescription)}</p>

                    {console.log(product)}

                    <Button variant={"outlined"} style={{marginRight: '10px'}} color={"secondary"} onClick={() => {
                        onClick(product)
                    }}>Buy Now</Button>
                    <Button variant={"outlined"} color={"primary"} onClick={() => {
                        Remove(product.id)
                    }}>Remove </Button>

                </Paper>


            </div>

            </Grid>

        })
    )

}
