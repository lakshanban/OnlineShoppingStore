const PageReducer=(state='login',action)=>{

    switch (action.payload) {

        case 'LOGIN':
            return 'login';

        case 'SIGN_UP':
            return 'signup';

        case 'PROFILE':
            return 'profile';

        case 'HOME':
            return 'home';

        case 'NOTICE':
            return 'notice'

        case 'CHAT':
            return 'chat'

        case 'ADMIN':
            return  'admin'

        case 'PRODUCT':
            return 'product'

        default:
            return state;

    }

}

export default PageReducer;
