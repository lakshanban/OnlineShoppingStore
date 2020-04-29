import React, {useEffect,useState} from "react";
import ComplexNavigationBar from "../Common/ComplexNavigationBar/ComplexNavigationBar";
import Drawer from "../Common/Drawer/Drawer";
import {Container,Grid} from "@material-ui/core";
import Tshirt from './tshirt.jpg';
import axios from 'axios'


export default function LoggedHome(props) {


      const [user,setUser]=useState({});


    const products=[{name:'T shirt',price:100,},{name:'T shirt',price:100,},{name:'T shirt',price:100,},{name:'T shirt',price:100,},{name:'T shirt',price:100,}]

    useEffect(()=>{

        axios.post('http://localhost:8080/userget',{username:props.user}).then(res=>{

            setUser(res.data);



        })


    })



    return(
        <div>
        <ComplexNavigationBar dispatch={props.dispatch} user={user}/>

            <Container maxWidth={"md"} style={{marginLeft:'30%'}}>

                <Grid container spacing={1} style={{display:"flex",marginTop:'50px'}}>

                    {
                        products.map(product=>{

                            return <Grid container item xs={4} spacing={4}>
                                <div>
                                    <h3>{product.name}</h3>
                                    <img src={Tshirt} style={{width: '100px', height: '200px',marginTop:'50px'}}/>
                                    <h5>Rs.{product.price}</h5>
                                </div>
                            </Grid>


                    })



                    }

                </Grid>



            </Container>



        </div>
        )

}
