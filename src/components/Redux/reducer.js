import * as actions from './actionTypes'

const initialStateUser = {
    username: 'username',
    email: 'username@domail.com',
    password: 'password',
    isLoggedIn: false
}

const initialStateWindow = {
    message: '',
    status: ''
}

export function userReducer(state = initialStateUser, action) {
    switch(action.type) {
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
                username: initialStateUser.username,
                email: initialStateUser.email,
                password: initialStateUser.password,
                isLoggedIn: initialStateUser.isLoggedIn
            };

        default:
            return state;
    }
}

export function windowReducer(state = initialStateWindow, action) {
    switch(action.type) {
        case actions.SHOW_STATUS:
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status
            };

        default:
            return state;
    }
}
 