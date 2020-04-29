import PageReducer from "./PageReducer";
import UserReducer from "./UserReducer"
import {combineReducers} from "redux";
import UserObjectReducer from "./UserObjectReducer";


const allreducer= combineReducers({
    PageReducer:PageReducer,
    UserReducer:UserReducer,
    UserObjectReducer:UserObjectReducer
})


export default allreducer;
