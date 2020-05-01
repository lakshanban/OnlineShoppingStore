import PageReducer from "./PageReducer";
import UserReducer from "./UserReducer"
import {combineReducers} from "redux";
import UserObjectReducer from "./UserObjectReducer";
import ProductReducer from "./ProductReducer";


const allreducer= combineReducers({
    PageReducer:PageReducer,
    UserReducer:UserReducer,
    UserObjectReducer:UserObjectReducer,
    ProductReducer:ProductReducer
})


export default allreducer;
