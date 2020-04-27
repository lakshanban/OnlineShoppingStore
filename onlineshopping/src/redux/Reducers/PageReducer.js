const PageReducer=(state='login',action)=>{

    switch (action.payload) {

        case 'LOGIN':
            return 'login';

        case 'SIGN_UP':
            return 'signup';

        default:
            return state;

    }

}

export default PageReducer;
