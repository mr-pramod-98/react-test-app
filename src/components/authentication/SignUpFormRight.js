import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormButton from './FormButton';
import './css/LoginFormRight.css'

class SignUpFormRight extends Component {
    render() {
		return (
            <div className="form-right">
                <div className="welcom-quote">
                    If you are already a part of our family then, Sing In.
                </div> 
                <div className="form-button">
                    <Link to="/" >
                        <FormButton
                            type = { 'button' }
                            value = { 'Sign In' }
                        />
                    </Link>
                </div>          
            </div>
		);
  	}
}

export default SignUpFormRight;