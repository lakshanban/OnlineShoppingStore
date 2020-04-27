const UserReducer=(state='',action)=>{

    switch(action.type){

        case 'SET':
            return action.payload;

        default:
            return state;
    }

}

export default UserReducer;

