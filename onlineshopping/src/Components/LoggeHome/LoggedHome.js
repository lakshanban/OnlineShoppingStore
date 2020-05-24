import React, {useEffect,useState} from "react";
import ComplexNavigationBar from "../Common/ComplexNavigationBar/ComplexNavigationBar";
import {Container,Grid} from "@material-ui/core";
import axios from 'axios'
import Post from "./Post";
import './Post.css'


export default function LoggedHome(props) {

    const [user,setUser] = useState({});
    

    function update(){
            axios.post('http://localhost:8080/userget',{username:props.user}).then(res=>{
            setUser(res.data);
            console.log(res.data)

        })
    }
    

const[userId,setUserID]= useState(0)
const[products,Setproducts]= useState([])


const fetchProducts= async ()=>{
    await axios.get('http://localhost:8080/getallproducts').then(res=> {

        Setproducts(res.data);

    })
}



    useEffect(()=>{
         fetchProducts();
    },[userId])



    const filterproducts=(catname)=>{


      axios.post('http://localhost:8080/filterbycat',{"category":catname}).then(res=>{

          Setproducts(res.data)
      })


    }

    const searchproducts=(products1)=>{

        Setproducts(products1)

    }


    return(

        <div>
        <ComplexNavigationBar dispatch={props.dispatch} user={user} filterproducts={filterproducts} products={products} searchproducts={searchproducts} userobject={props.userobject}/>

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
