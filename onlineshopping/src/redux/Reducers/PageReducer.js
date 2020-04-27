const PageReducer=(state='login',action)=>{

    switch (action.payload) {

        case 'LOGIN':
            return 'login';

        case 'SIGN_UP':
            return 'signup';

        case 'PROFILE':
            return 'profile';

        case 'HOME':
            return 'home'

        default:
            return state;

    }

}

export default PageReducer;
