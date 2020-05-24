const PurchaseReducer=(state={},action)=> {

 switch(action.type){
  case 'PURCHASE':
   return action.payload;

  default:
   return state;
 }

}
 export default PurchaseReducer;
