import React,{Component} from "react";
import axios from "axios"
import {Table, TableContainer, TableHead, TableRow, TableCell, Button,TableBody} from "@material-ui/core";
import "./Post.css"


export  default class CartPost extends Component{

    constructor() {
        super();

        this.state={
            orders:[],
            total:0
        }
    }

    totalx=0

    componentDidMount() {

        axios.post('http://localhost:8080/getcart',{"username":this.props.user}).then(res=>{

            this.setState({orders:res.data})
        })




    }

    Total=0

    calculate(order){

        let total= order.quan*(order.product.pprice-(order.product.pprice*order.product.pdiscount/100))

       this.Total=this.Total+total

        return total

    }

    Viewproduct(product){

        console.log('View Clicked')

        this.props.setproduct('SETPRODUCT',product)
        this.props.dispatch('PRODUCT')

    }

    Remove(index,order){

        axios.post('http://localhost:8080/removefromcart',{"username":this.props.user,"index":index}).then(res=>{

            this.setState({orders:res.data})
        })




    }


    render() {
        return <div>
<TableContainer>
            <Table stickyHeader aria-label="sticky table">

                <TableHead>

                    <TableRow>

                        <TableCell className={"cell"} align={"center"}>ProductName</TableCell>
                        <TableCell className={"cell"} align={"center"}>Quantity</TableCell>
                        <TableCell className={"cell"} align={"center"}>price</TableCell>
                        <TableCell className={"cell"} align={"center"}>discount</TableCell>
                        <TableCell className={"cell"} align={"center"}>DPrice</TableCell>



                    </TableRow>



                </TableHead>


                <TableBody>


                    {this.state.orders.map((order,index)=>{


                        return <TableRow>

                            <TableCell align={"center"}>{order.product.pname}</TableCell>
                            <TableCell align={"center"}>{order.quan}</TableCell>
                            <TableCell align={"center"}>{order.product.pprice}</TableCell>
                            <TableCell align={"center"}>{order.product.pdiscount}</TableCell>
                            <TableCell align={"center"}>{this.calculate(order)}</TableCell>
                            <TableCell align={"center"}><Button variant={"contained"} color={"secondary"} onClick={()=>{this.Remove(index,order)}}>Remove</Button></TableCell>
                            <TableCell align={"center"}><Button variant={"contained"} color={"primary"} onClick={()=>this.Viewproduct(order.product)}>View</Button></TableCell>

                        </TableRow>


                    })}


                    <TableCell className={"cell"} align={"center"}></TableCell>
                    <TableCell className={"cell"} align={"center"}></TableCell>
                    <TableCell className={"cell"} align={"center"}></TableCell>
                    <TableCell className={"cell"} align={"center"}><h5>Total:</h5></TableCell>
                    <TableCell className={"cell"} align={"center"}><h5>Rs.{this.Total}</h5></TableCell>
                    <TableCell align={"center"}>
                        <Button variant={"contained"}
                                color={"primary"}
                                onClick={()=>{this.props.dispatch('PAY')}}
                        >
                            Checkout
                        </Button>
                    </TableCell>

                </TableBody>


            </Table>

</TableContainer>
        </div>
    }
}
