function validate(username, password) {
    if(!username || !password ){
        return false;
    }else {
        return true;
    }
}

export default validate;