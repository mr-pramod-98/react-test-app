import * as actions from './actionTypes';

export function userStored(username, email, password) {
    console.log("user stored");
    return {
        type: actions.USER_STORED,
        payload: {
            username,
            email,
            password,
            isLoggedIn: true
        }
    }
}

export function userUpdated(username, email, password) {
    console.log("user updates");
    return {
        type: actions.USER_UPDATED,
        payload: {
            username,
            email,
            password
        }
    }
}

export function userLoggedOut() {
    console.log("Logged out");
    return {
        type: actions.USER_LOGGED_OUT,
        payload: {
            isLoggedIn: false
        }
    }
}