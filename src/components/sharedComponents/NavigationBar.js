import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLoggedOut } from '../Redux/actionCreators';
import './css/NavigationBar.css'


class NavigationBar extends Component {
    render() {
		return (
            <nav className="nav-bar">
                <Link className="logo-link" to="/">
                    <div className="logo-main">React<samp>App</samp></div>
                </Link>
                <ul className="nav-links">
                    <Link className="links" to="/user-profile">Profile</Link>
                    <Link className="links" to="/">Delete</Link>
                    <Link 
                        to="/"
                        className="links"
                        onClick = { () => this.props.userLoggedOut() }>
                        Logout
                    </Link>
                </ul>  
            </nav>     
		);
  	}
}


const mapDispatchToProps = dispatch => {
    return {
        userLoggedOut: () => dispatch(userLoggedOut())
    }
}

export default connect(null, mapDispatchToProps)(NavigationBar);