import PageReducer from "./PageReducer";
import UserReducer from "./UserReducer"
import {combineReducers} from "redux";
import UserObjectReducer from "./UserObjectReducer";
import ProductReducer from "./ProductReducer";
import PurchaseReducer from "./PurchaseReducer";
import TotalReducer from "./TotalReducer";


const allreducer= combineReducers({
    PageReducer:PageReducer,
    UserReducer:UserReducer,
    UserObjectReducer:UserObjectReducer,
    ProductReducer:ProductReducer,
    PurchaseReducer: PurchaseReducer,
    TotalReducer:TotalReducer
})


export default allreducer;
