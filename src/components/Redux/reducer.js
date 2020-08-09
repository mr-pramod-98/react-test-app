import * as actions from './actionTypes'

const initialState = {
    username: 'username',
    email: 'username@domail.com',
    password: 'password',
    isLoggedIn: false
}

function reducer(state = initialState, action) {
    switch(action.type){
        case actions.USER_STORED:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                isLoggedIn: action.payload.isLoggedIn
            };

        case actions.USER_UPDATED:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
            };

        case actions.USER_LOGGED_OUT:
            return {
                ...state,
                username: initialState.username,
                email: initialState.email,
                password: initialState.password,
                isLoggedIn: initialState.isLoggedIn
            };

        default:
            return state;
    }
}

export default reducer;