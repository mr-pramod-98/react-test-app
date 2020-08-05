function validate(username, email, password) {
    if(!username || !email || !password){
        return false;
    }else {
        return true;
    }
}

export default validate;