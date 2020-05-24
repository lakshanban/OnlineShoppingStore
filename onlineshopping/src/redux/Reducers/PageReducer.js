const PageReducer=(state='nonehome',action)=>{

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


        case 'PURCHASED':
            return 'purchased'

        case 'P_PRODUCT':
            return 'pproduct'

        case 'MANAGER':
            return 'manager'
        
        case 'NONEHOME':
            return 'nonehome'

        case 'CHECKOUT':
            return 'checkout'

        default:
            return state;


    }

}

export default PageReducer;
