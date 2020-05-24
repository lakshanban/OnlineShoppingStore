const TotalReducer=(state=0,action)=>{


    switch(action.type){
        case 'ADD':
            return state+action.payload;

        default:
            return state;
    }
}
export default TotalReducer;
