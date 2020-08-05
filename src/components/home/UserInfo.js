import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../sharedComponents/NavigationBar';
import FormButton from '../authentication/FormButton';
import { userLoggedOut } from '../Redux/actionCreators';
import './css/UserInfo.css'


class UserInfo extends Component {
    render() {
		return (
            <React.Fragment>

                <NavigationBar />
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