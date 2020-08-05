import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormButton from './FormButton';
import FormInputField from './FormInputField'
import validate from './LoginFormValidation'
import { userLoggedIn } from '../Redux/actionCreators';
import './LoginFormLeft.css'


class LoginFormLeft extends Component {

    state = {
        username: '',
        password: '',
    }

    onDataChange = (key, value) => this.setState({ [key]: value });

    onSubmit = (e) => {
        e.preventDefault();
        if(validate(this.state.username, this.props.username, this.state.password, this.props.password)){
            this.props.userLoggedIn()
        } else {
            alert("User Dose not exist");
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormLeft);