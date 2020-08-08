import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../sharedComponents/NavigationBar';
import './css/UserProfile.css'


class UserProfile extends Component {

    render() {
		return (
            <React.Fragment>

                <NavigationBar />
                <div className="container-main">
                    <h1>User Profile</h1>

                    <form className="form">

                        <input type="text" name="username" placeholder={ this.props.username } readOnly/>
                        <input type="email" name="email" placeholder={ this.props.email }/>
                        <input type="password" name="password" placeholder={ this.props.password } />
                        <button type="submit" >Update</button>
                            
                    </form>
                </div>
                
            </React.Fragment>      
		);
  	}
}

const mapStateToProps = state => {
    return {
        username: state.username,
        email: state.email,
        password: state.password
    }
}


export default connect(mapStateToProps)(UserProfile);