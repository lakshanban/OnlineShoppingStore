import PageReducer from "./PageReducer";
import {combineReducers} from "redux";


const allreducer= combineReducers({
    PageReducer:PageReducer
})


export default allreducer;
