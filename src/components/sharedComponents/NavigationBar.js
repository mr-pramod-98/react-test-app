import React, { Component } from 'react'
import axiosAPI from '../Axios/axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLoggedOut } from '../Redux/actionCreators'
import './css/NavigationBar.css'


class NavigationBar extends Component {

    deleteUser = () => {
        axiosAPI.delete(`/${ this.props.username }/delete`)
            .then(res => {
                const {status, data} = res;
                const {msg, user} = data;
                console.log(`status: ${status}, msg: ${msg}, user: ${user.username}`);
                this.props.userLoggedOut();
            })
    }

    render() {
		return (
            <nav className="nav-bar">
                <Link className="logo-link" to="/">
                    <div className="logo-main">React<samp>App</samp></div>
                </Link>
                <ul className="nav-links">
                    <Link className="links" to="/user-profile">Profile</Link>
                    <Link  
                        to="/"
                        className="links"
                        onClick = { this.deleteUser }>
                        Delete
                    </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);