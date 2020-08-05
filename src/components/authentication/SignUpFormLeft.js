import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormButton from './FormButton';
import FormInputField from './FormInputField'
import validate from './LoginFormValidation'
import { userLoggedIn } from '../Redux/actionCreators';
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

            this.props.userLoggedIn()
        } else {
            alert("User already exist");
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

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLoggedIn: () => dispatch(userLoggedIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormLeft);