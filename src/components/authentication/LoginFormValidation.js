function validate(username, redux_username, password, redux_password) {
    if(username !== redux_username || password !== redux_password){
        return false;
    }else {
        return true;
    }
}

export default validate;