const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        console.log('SignIn success');
        return {
          ...state,
          authError: null
        };
      case 'LOGIN_ERROR':
        console.log('SignIn Failed');
        return {
          ...state,
          authError: 'SignIn Failed'
        };
        case 'SIGNOUT_SUCCESS':
            console.log('Sign out success');
            return state;
      default:
        return state;
    }
};

export default authReducer;