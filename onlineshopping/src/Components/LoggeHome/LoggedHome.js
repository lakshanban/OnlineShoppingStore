import React, {useEffect,useState} from "react";
import ComplexNavigationBar from "../Common/ComplexNavigationBar/ComplexNavigationBar";
import Drawer from "../Common/Drawer/Drawer";
import {Container,Grid} from "@material-ui/core";
import Tshirt from './tshirt.jpg';
import axios from 'axios'
import Post from "./Post";
import './Post.css'
import ImageShow from "../Product/ImageShow";
import setProduct from "../../redux/Actions/setProduct";


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


<<<<<<< HEAD
    function update(){
=======

    // axios.get('http://localhost:8080/getallproducts')
    //     .then(res=> {
    //
    //     });
>>>>>>> 79272d099862e22ca860696ea415238f269dfc87


    // item.pro.map(value => {
    //     console.log(value.pdiscount);
    // });

<<<<<<< HEAD





=======
    function update(){
            axios.post('http://localhost:8080/userget',{username:props.user}).then(res=>{
            setUser(res.data);
            console.log(res.data)
>>>>>>> 79272d099862e22ca860696ea415238f269dfc87
        })
    }

<<<<<<< HEAD



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



=======
>>>>>>> 79272d099862e22ca860696ea415238f269dfc87
    return(

        <div>
<<<<<<< HEAD
        <ComplexNavigationBar dispatch={props.dispatch} user={user} filterproducts={filterproducts} products={products} searchproducts={searchproducts}/>


=======
        <ComplexNavigationBar dispatch={props.dispatch} user={user}/>
>>>>>>> 79272d099862e22ca860696ea415238f269dfc87
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
