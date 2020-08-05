import * as actions from './actionTypes'


function reducer(state = {
    username: 'pramod_0098',
    password: 'reactApp',
    isLoggedIn: false
}, action) {
    switch(action.type){
        case actions.USER_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true
            };

        case actions.USER_LOGGED_OUT:
            return {
                ...state,
                isLoggedIn: false
            };

        default:
            return state;
    }
}

export default reducer;