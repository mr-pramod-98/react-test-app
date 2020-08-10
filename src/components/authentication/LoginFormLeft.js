import React, { Component } from 'react'
import FormButton from './FormButton'
import FormInputField from './FormInputField'
import validate from './LoginFormValidation'
import { userStored, showStatus } from '../Redux/actionCreators'
import store from '../Redux/store'
import axiosAPI from '../Axios/axios'
import './css/LoginFormLeft.css'


class LoginFormLeft extends Component {

    state = {
        username: '',
        password: '',
    }

    onDataChange = (key, value) => this.setState({ [key]: value });

    onSubmit = (e) => {
        e.preventDefault();
        if(validate(this.state.username, this.state.password)){

            // authenticate user
            const user = {
                username: this.state.username,
                password: this.state.password
            }
            axiosAPI.post("/", user)
                .then(res => {
                    const {status, data} = res;
                    const {msg, user} = data;
                    //console.log(`status: ${status}, msg: ${msg}`);
                    store.dispatch(showStatus("success", msg));
                    store.dispatch(userStored(user.username, user.email, user.password));
                })
                .catch(err => {
                    const {status, data} = err.response;
                    store.dispatch(showStatus("warning", data.msg));
                    console.log(`status: ${status}, msg: ${data.msg}`);
                });

        } else {
            alert("All fields are requried");
        }
    }


    render() {
		return (
            
            <form className="form-left" method="get" onSubmit={ this.onSubmit }>

                <div className="logo">React<samp>App</samp></div>

                <div className="form-header">
                    <div className="form-title">Login</div>
                    <div className="form-dec">Please Sign in to continue</div>
                </div>

                <div className="form-wrapper">

                    <div className="form-input">
                        <FormInputField 
                            type = { 'text' }
                            name = { 'username' }
                            placeholder = { 'USERNAME' }
                            onDataChange = { this.onDataChange }
                        />
                        <FormInputField 
                            type = { 'password' }
                            name = { 'password' }
                            placeholder = { 'PASSWORD' }
                            onDataChange = { this.onDataChange }
                        />
                    </div>
                    <div className="form-submit-button">
                        <FormButton
                            type = { 'submit' }
                            value = { 'Sign in' }
                        />
                    </div>
                    
                </div>
            </form>
		);
  	}
}


export default LoginFormLeft;