import React, { Component } from 'react';
import SignUpFormLeft from './SignUpFormLeft'
import SignUpFormRight from './SignUpFormRight'
import './css/LoginForm.css'

class SignUpForm extends Component {
    render() {
		return (
            <div className="container">
                <div className="card">
                    <SignUpFormLeft />    
                    <SignUpFormRight /> 
                </div>           
            </div>
		);
  	}
}

export default SignUpForm;