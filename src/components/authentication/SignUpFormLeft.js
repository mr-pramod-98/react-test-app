import React, { Component } from 'react';
import FormButton from './FormButton';
import FormInputField from './FormInputField'
import validate from './SignUpFormValidation'
import axiosAPI from '../Axios/axios';
import './css/LoginFormLeft.css'


class SignUpFormLeft extends Component {

    state = {
        username: '',
        email: '',
        password: '',
    }

    onDataChange = (key, value) => this.setState({ [key]: value });

    onSubmit = (e) => {
        e.preventDefault();
        if(validate(this.state.username, this.state.email, this.state.password)){

            // TODO:/ add user to database
            const newUser = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
            axiosAPI.post('/sign-up', newUser)
                .then(res => console.log(res.data))
                .catch(err => {
                    const {status, data} = err.response;
                    console.log(`status: ${status}, msg: ${data.msg}`);
                });

        } else {
            alert("All fields are requried");
        }
    }


    render() {
		return (
            
            <form className="form-left" onSubmit={ this.onSubmit }>

                <div className="logo">React<samp>App</samp></div>

                <div className="form-header">
                    <div className="form-title">Sign Up</div>
                    <div className="form-dec">Start you journey with us by a click</div>
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
                            type = { 'email' }
                            name = { 'email' }
                            placeholder = { 'EMAIL' }
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
                            value = { 'Sign Up' }
                        />
                    </div>
                    
                </div>
            </form>
		);
  	}
}


export default SignUpFormLeft;