import React from "react";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import loadpage from "../../redux/Actions/loadpage";


function GetPageButton(props){

    const dispatch= useDispatch();


  let  loadnextpage=()=>{

      dispatch(loadpage(props.nextpage))
        console.log(props.nextpage)


     }





    return (

        <div style={{marginLeft:props.marginLeft}}>
        <Button color="secondary" variant="contained" onClick={loadnextpage}>{props.nextpage}</Button>

        </div>
    )
}
export default GetPageButton;
