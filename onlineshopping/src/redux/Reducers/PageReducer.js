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

        case 'CART':
            return 'cart'

        case 'LIST':
            return 'list'

        case 'PAY':
            return 'pay'

<<<<<<< HEAD
        case 'PURCHASED':
            return 'purchased'

        case 'P_PRODUCT':
            return 'pproduct'
=======
        case 'CHECKOUT':
            return 'checkout'
>>>>>>> a3fb52502b315f291e53b5ee0009745f965a82db

        default:
            return state;


    }

}

export default PageReducer;
