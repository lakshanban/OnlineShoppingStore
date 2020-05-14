import React, {useEffect,useState} from "react";
import ComplexNavigationBar from "../Common/ComplexNavigationBar/ComplexNavigationBar";
import Drawer from "../Common/Drawer/Drawer";
import {Container,Grid} from "@material-ui/core";
import Tshirt from './tshirt.jpg';
import axios from 'axios'
import Post from "./Post";
import './Post.css'
import ImageShow from "../Product/ImageShow";


export default function LoggedHome(props) {

    const [user,setUser] = useState({});

    const products=[
        {name:'T shirt',price:100,description:"description"},
        {name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"},
        {name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"},
        {name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"},
        {name:'T shirt',price:100,description:"A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting"}
        ]
    //let products = [];



    // axios.get('http://localhost:8080/getallproducts')
    //     .then(res=> {
    //
    //     });


    // item.pro.map(value => {
    //     console.log(value.pdiscount);
    // });

    function update(){
            axios.post('http://localhost:8080/userget',{username:props.user}).then(res=>{
            setUser(res.data);
            console.log(res.data)
        })
    }

    return(

        <div>
        <ComplexNavigationBar dispatch={props.dispatch} user={user}/>
            <Container maxWidth={"xl"} style={{marginLeft:'5%'}}>
                <Grid container spacing={1} style={{display:"flex",marginTop:'50px'}}>
                    {
                        products.map(product=>{
                            return (
                            <Grid container item xs={4} spacing={4} style={{margin:'00px'}} className="gridItem">
                                <Post product={product} dispatch={props.dispatch} setproduct={props.setproduct}/>
                            </Grid>
                            )
                    })
                    }
                </Grid>
            </Container>
        </div>
        )

}
