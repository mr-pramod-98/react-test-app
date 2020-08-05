import React, { Component } from 'react';
import LoginFormLeft from './LoginFormLeft'
import LoginFormRight from './LoginFormRight'
import './LoginForm.css'

class LoginForm extends Component {
    render() {
		return (
            <div className="container">
                <LoginFormLeft />    
                <LoginFormRight />            
            </div>
		);
  	}
}

export default LoginForm;