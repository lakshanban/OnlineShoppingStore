import React from "react";
import ComplexNavigationBar from "../Common/ComplexNavigationBar/ComplexNavigationBar";
import Drawer from "../Common/Drawer/Drawer";
import {Container,Grid} from "@material-ui/core";
import Tshirt from './tshirt.jpg';


export default function LoggedHome(props) {


    const products=[{name:'T shirt',price:100,},{name:'T shirt',price:100,},{name:'T shirt',price:100,},{name:'T shirt',price:100,},{name:'T shirt',price:100,}]



    return(
        <div>
        <ComplexNavigationBar dispatch={props.dispatch}/>

            <Container maxWidth={"md"} style={{marginLeft:'30%'}}>

                <Grid container spacing={1} style={{display:"flex",marginTop:'50px'}}>

                    {
                        products.map(product=>{

                            return <Grid container item xs={4} spacing={4}>
                                <div>
                                    <img src={Tshirt} style={{width: '100px', height: '200px',marginTop:'50px'}}/>
                                </div>
                            </Grid>


                    })



                    }

                </Grid>



            </Container>



        </div>
        )

}
