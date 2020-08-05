import * as actions from './actionTypes';

export function userLoggedIn() {
    console.log("Logged in");
    return {
        type: actions.USER_LOGGED_IN,
        paylode: {
            isLoggedIn: true
        }
    }
}

export function userLoggedOut() {
    console.log("Logged out");
    return {
        type: actions.USER_LOGGED_OUT,
        paylode: {
            isLoggedIn: false
        }
    }
}