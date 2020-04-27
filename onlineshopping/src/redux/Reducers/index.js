import PageReducer from "./PageReducer";
import UserReducer from "./UserReducer"
import {combineReducers} from "redux";


const allreducer= combineReducers({
    PageReducer:PageReducer,
    UserReducer:UserReducer
})


export default allreducer;
