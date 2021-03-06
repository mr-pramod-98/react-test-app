import React, { Component } from 'react';
import FormButton from './FormButton';
import './css/LoginFormRight.css'
import { Link } from 'react-router-dom';

class LoginFormRight extends Component {
    render() {
		return (
            <div className="form-right">
                <div className="welcom-quote">
                    Start you journey with us by a click.
                </div> 
                <div className="form-button">
                    <Link to="/sign-up" >
                        <FormButton
                            type = { 'button' }
                            value = { 'Sign Up' }
                        />
                    </Link>
                </div>          
            </div>
		);
  	}
}

export default LoginFormRight;