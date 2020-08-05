import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FormButton from '../authentication/FormButton';
import { userLoggedOut } from '../Redux/actionCreators';
import './css/UserInfo.css'


class UserInfo extends Component {
    render() {
		return (
            <React.Fragment>

                <nav className="nav-bar">
                    <div className="logo">React<samp>App</samp></div>
                    <ul className="nav-links">
                        <Link className="links">Profile</Link>
                        <Link className="links">Delete</Link>
                        <Link 
                            className="links"
                            onClick = { () => this.props.userLoggedOut() }>
                            Logout
                        </Link>
                    </ul>  
                </nav>
                <div className="container-main">
                    <h1>Hello { this.props.username } :)</h1>
                    <FormButton
                        type = { 'submit' }
                        value = { 'Logout' }
                        onClick = { () => this.props.userLoggedOut() }
                    />
                </div>
                
            </React.Fragment>      
		);
  	}
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLoggedOut: () => dispatch(userLoggedOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);