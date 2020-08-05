import React, { Component } from 'react';
import FormButton from './FormButton';
import './css/LoginFormRight.css'

class LoginFormRight extends Component {
    render() {
		return (
            <div className="form-right">
                <div className="welcom-quote">
                    Start you journey with us by a click
                </div> 
                <div className="form-button">
                    <FormButton
                        type = { 'button' }
                        value = { 'Sign Up' }
                    />
                </div>          
            </div>
		);
  	}
}

export default LoginFormRight;