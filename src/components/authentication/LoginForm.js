import React, { Component } from 'react';
import LoginFormLeft from './LoginFormLeft'
import LoginFormRight from './LoginFormRight'
import './css/LoginForm.css'

class LoginForm extends Component {
    render() {
		return (
            <div className="container">
                <div className="card">
                    <LoginFormLeft />    
                    <LoginFormRight /> 
                </div>           
            </div>
		);
  	}
}

export default LoginForm;