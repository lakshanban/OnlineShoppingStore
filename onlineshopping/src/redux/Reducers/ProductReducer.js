const ProductReducer=(state='',action)=>{


    switch(action.type){
        case 'SETPRODUCT':
            return action.payload;

        default:
            return state;
    }
}
export default ProductReducer;
