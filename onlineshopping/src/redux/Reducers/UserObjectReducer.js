const UserObjectReducer=(state=null,action)=>{

    switch(action.type){

        case 'SETOBJECT':
            return action.payload;

        default:
            return state;
    }

}

export default UserObjectReducer;
